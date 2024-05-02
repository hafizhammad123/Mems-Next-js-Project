import Link from "next/link";

export default async function Home() {

  const res = await fetch("https://api.imgflip.com/get_memes")
  const response = await res.json()

  




  return (
    <div>
      <>

        
        <h2 className="heading">MEMES GENERATOR</h2>

        <div className="main-div">
          {response.data.memes.map(function (item, index) {
            return (
              <Link href={`meme?aa=${item.url}`}>

                <div className="nested-div1">
                  <div className="nested-div">
                    <img className="abc" src={item.url} />
                    <span className="text-liya">
                    <h2>{item.id}</h2>
                    <h2>{item.name}</h2>
                    </span>
                  </div>
                </div>
     
     <Link href={'about'}>chal about per</Link>

              </Link>

            )
          })}
        </div>


      </>
    </div>
  );
}
