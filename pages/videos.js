import Head from 'next/head';

function Videos() {
  return (
    <>
      <Head><title>Music Videos</title></Head>
      <br />
      <h2 className="grid place-items-center place-center text-6xl"> Music Videos feat Alex</h2>
      <div className="text-center my-4 night">
        <div className="flex around flex-wrap">
          <video controls>
            <source src="https://www.youtube.com/watch?v=gA4u5U9gMt4" />
            <track kind="captions" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Videos;
