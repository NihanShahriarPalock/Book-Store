import Navbar from "../components/Navbar";


const Error = () => {
    return (
      <div>
        <div className='h-16 mt-5 mb-7 mx-2 lg:mx-28 '>
          <Navbar></Navbar>
        </div>
        {/* <h2 className='flex items-center justify-center min-h-dvh'>Error</h2> */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          <svg width='400' height='200' xmlns='http://www.w3.org/2000/svg'>
            <style>
              {`
            .bounce {
              animation: bounce 1s infinite alternate;
            }

            @keyframes bounce {
              0% { transform: translateY(0); }
              100% { transform: translateY(-20px); }
            }
          `}
            </style>

            <rect width='100%' height='100%' fill='#f0f0f0' />
            <text
              x='50%'
              y='50%'
              textAnchor='middle'
              fontSize='48'
              fill='#333'
              className='bounce'>
              404 Error
            </text>
          </svg>
        </div>
      </div>
    );
};

export default Error;