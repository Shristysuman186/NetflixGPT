import Header from './Header';

const Body = () => {
  return (
    <div>
    <Header/>
    <div className='absolute'><img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="Background"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90 z-10"></div>
    </div>
    </div>
  )
}

export default Body;