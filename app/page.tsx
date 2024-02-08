import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Click to view next"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQqsq2Q2N5XFmsrqXsmNAyrsjfNnZK2sSs1H8jQUiuymG/Image1.jpeg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Disco party!',
  description: 'Create AI generated images',
  openGraph: {
    title: 'Disco party!',
    description: 'Create AI generated images',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQqsq2Q2N5XFmsrqXsmNAyrsjfNnZK2sSs1H8jQUiuymG/Image1.jpeg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Let's have a disco party!</h1>
    <img src="https://pink-major-beaver-842.mypinata.cloud/ipfs/QmQqsq2Q2N5XFmsrqXsmNAyrsjfNnZK2sSs1H8jQUiuymG/Image1.jpeg"></img>
    </>
  );
}

