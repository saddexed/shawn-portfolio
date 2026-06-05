import { Box } from '../../components/Box';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Reminder',
  description:
    'A short personal reminder page. Edit this with your own principles, goals, or notes.',
  openGraph: {
    title: 'Reminder // Shaun Beniel Edwin',
    url: '/reminder',
    images: ['/static/images/reminder-bw.jpg']
  }
};

export default function Reminder() {
  return (
    <Base
      title="Reminder // Shaun Beniel Edwin"
      tagline="Notes. Principles. Focus."
      primaryColor="cyan"
      secondaryColor="green"
    >
      <Box className="text-justify">
        <p>
          <strong>This page is optional.</strong> Use it for principles, goals,
          reminders, or remove the route if it does not fit your portfolio. Keep
          learning, keep shipping, and keep the site honest to who you are.
        </p>
        <p>
          <em>- edit this with your own note</em>
        </p>
      </Box>
    </Base>
  );
}
