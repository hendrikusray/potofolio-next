import "../assets/style.css"
import "@fortawesome/fontawesome-free";
// import Pdf from '../pages/file/CV.pdf'


export default function Home() {
  return (
    <div>
      <div className="layout bg-gray-800">
        <div className="d-flex flex-column">
          <div style={{ textAlign: "-webkit-center" }}><img style={{ width: 150 + "px", height: 150 + "px", borderRadius: 50 + "%" }} alt="Responsive image" className="img-thumbnail" src="static/img/test2.jpg" /></div>
          <div className="mt-4"> <h2 className="font-mono text-white text-3xl">Hendrikus Adi Purnama</h2></div>
          <div> <strong className="text-2xl my-2" style={{ color: '#d65562' }}>Software Engineer</strong></div>
          <div><h4 className="text-white my-2">Hi! My name is <strong>Hendrikus</strong>, I write code in PHP and Javascript</h4></div>
          <div className="d-flex justify-content-center mt-2">
            <div> <a href="https://www.linkedin.com/in/hendrikus-adi-purnama-687759192/"><i style={{ fontSize: '27' + 'px', cursor: 'pointer' }} className="fab fa-linkedin"></i></a></div>
            <div className="ml-3"> <a href="https://twitter.com/RawkRay"><i style={{ fontSize: '27' + 'px', cursor: 'pointer' }} className="fab fa-twitter-square"></i></a> </div>
            <div className="ml-3"> <a href="mailto:hendrikusray@gmail.com" > <i style={{ fontSize: '27' + 'px', cursor: 'pointer' }} className="fas fa-envelope"></i> </a> </div>
          </div>
          <div className="mt-3">
          <a href="/static/pdf/CV.pdf" style={{textDecoration : 'none'}} target = "_blank" download>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Get CV</span>
             
            </button>
          </a>
            </div>
        </div>
      </div>
    </div>
  )
}
