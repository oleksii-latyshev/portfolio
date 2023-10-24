import { ServerRuntime } from 'next';
import { ImageResponse } from 'next/server';

export const runtime: ServerRuntime = 'edge';

export async function GET() {
  try {
    const fontSemiBold = await fetch(
      new URL('../../../assets/fonts/Poppins-SemiBold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());
    const fontMedium = await fetch(
      new URL('../../../assets/fonts/Poppins-Medium.ttf', import.meta.url)
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
          <h2 tw='text-[7rem] font-bold tracking-tight m-0 p-0 uppercase text-zinc-50'>
            Fullstack
          </h2>
          <h1 tw='text-6xl font-bold tracking-tight m-0 p-0 text-zinc-300'>
            Oleksii Latyshev
          </h1>

          <div
            tw='absolute -top-[200px] -right-[200px] z-10 bg-blue-400/60 rounded-full h-[400px] w-[400px] '
            style={{
              filter: 'blur(160px)',
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
            data: fontMedium,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'Poppins',
            data: fontSemiBold,
            style: 'normal',
            weight: 700,
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
