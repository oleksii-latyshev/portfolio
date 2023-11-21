import { ServerRuntime } from 'next';
import { ImageResponse } from 'next/server';

import { POSITION } from '@/configs/site.configs';

export const runtime: ServerRuntime = 'edge';

export async function GET() {
  try {
    const fontSemiBold = await fetch(
      new URL('../../../assets/fonts/Poppins-SemiBold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          tw='h-full w-full flex justify-center items-start flex-col p-10 pl-20 relative'
          style={{
            color: '#fff',
            background: 'black',
          }}
        >
          <h1 tw='text-8xl font-semibold uppercase tracking-tight m-0 p-0 text-zinc-50'>
            Oleksii Latyshev
          </h1>
          <h2 tw='text-6xl font-semibold uppercase tracking-tight m-0 p-0 text-zinc-300'>
            {POSITION}
          </h2>

          <div
            tw='absolute -top-[175px] -right-[175px] z-10 bg-zinc-50/40 rounded-full h-[350px] w-[350px] '
            style={{
              filter: 'blur(140px)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Poppins',
            data: fontSemiBold,
            style: 'normal',
            weight: 600,
          },
        ],
      }
    );
  } catch (error) {
    error instanceof Error
      ? console.error('OG Error', error.message)
      : console.error('OG Error', error);

    return new Response('OG Image generation error', {
      status: 500,
    });
  }
}
