import FeaturedArticle from '../../components/FeaturedArticle';
import { ListGroup } from '../../components/ListGroup';
import ListItem from '../../components/ListItem';
import Base from '../../layouts/Base';
import { getAllPosts, getPostBySlug } from '../../lib/blog';

export const metadata = {
  title: 'Articles',
  description:
    'A starter articles page. Replace the sample article with your own writeups, notes, and guides.',
  openGraph: {
    title: 'Articles // Shaun Beniel Edwin',
    url: '/articles',
    images: ['/static/images/articles-bw.jpg']
  }
};

export default async function Articles() {
  const allPosts = getAllPosts(['date', 'skip', 'slug', 'title']);

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description'
  ];

  const featuredPosts = allPosts
    .filter((post) => !post.skip)
    .slice(0, 2)
    .map((post) => getPostBySlug(post.slug, featuredParams));

  const visiblePosts = allPosts.filter((post) => !post.skip);
  const articleLabel =
    visiblePosts.length === 1 ? 'sample article' : 'sample articles';
  const description = `This page is ready for <strong>${visiblePosts.length} ${articleLabel}</strong>. Replace it with CTF writeups, project notes, guides, or learning logs.`;

  const renderFeatured = () => {
    return featuredPosts.map((post, index) => {
      return (
        <FeaturedArticle
          key={post.slug}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          description={post.description}
          image={post.image}
          stats={post.stats}
          content={post.content}
        />
      );
    });
  };

  const renderAll = () => {
    return allPosts
      .filter((post) => !post.skip)
      .map((post, index) => {
        return (
          <ListItem
            key={post.slug}
            index={index}
            href={`/${post.slug}/`}
            title={post.title}
            date={post.date}
          />
        );
      });
  };

  return (
    <Base
      title="Articles // Shaun Beniel Edwin"
      tagline="Writeups. Notes. Guides."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <h2>Featured Articles</h2>
      <div className="my-2.5 mt-2.5 -ml-5 md:flex md:w-[calc(100%+3.375rem)] md:justify-between">
        {featuredPosts.length > 0 ? renderFeatured() : null}
      </div>
      <h2>All Articles</h2>
      <ListGroup>{renderAll()}</ListGroup>
    </Base>
  );
}
