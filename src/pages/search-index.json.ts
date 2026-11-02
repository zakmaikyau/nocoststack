import { paidTools } from '../data/tools';

export function GET() {
  const items = paidTools.map((t) => ({
    title: `Free alternatives to ${t.name}`,
    url: `/alternatives/${t.slug}/`,
    sub: t.alternatives.map((a) => a.name).join(', '),
    text: [t.name, t.tagline, ...t.alternatives.map((a) => a.name)].join(' ').toLowerCase(),
  }));
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
}
