import { ImageResponse } from '@vercel/og';
import storesMeta from '../stores-meta.json';

export const config = { runtime: 'edge' };

export default function handler(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id') || '0';
  const store = storesMeta[id];
  const name = store ? store[0] : 'タコスコ';
  const area = store ? store[1] : '日本中のタコスに出会えるサイト';
  const nb = store ? store[2] : '';
  const location = area + (nb ? ' ' + nb : '');

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #2dd4bf 100%)',
          color: 'white',
          fontFamily: '"Noto Sans JP", sans-serif',
          padding: '40px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { fontSize: 48, marginBottom: 20, display: 'flex', alignItems: 'center', gap: '12px' },
              children: [
                { type: 'span', props: { children: '\ud83c\udf2e' } },
                { type: 'span', props: { style: { fontWeight: 'bold' }, children: 'タコスコ' } },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: name.length > 20 ? 48 : 60,
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: 1.3,
                maxWidth: '90%',
                wordBreak: 'break-word',
              },
              children: name,
            },
          },
          {
            type: 'div',
            props: {
              style: { fontSize: 32, marginTop: 20, opacity: 0.85 },
              children: location,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: 30,
                fontSize: 20,
                opacity: 0.6,
              },
              children: 'tacos-db3.vercel.app',
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 }
  );
}
