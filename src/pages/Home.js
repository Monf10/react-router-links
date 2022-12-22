import { Link } from "react-router-dom";
import movie from "../tarkovsky.jpg"
import Page from "./Page";

export function Home(){
    return(
    // page ში გვაქვს გატანილი ზოგადი ნაწილი. ანუ ნავიგაცია და ფუტერი, რომლის შორისაც იწყვირთება შვილობილი კომპონენტი
    // თითოეული ფაილის მიხედვით შვილობილი კომპონენტის ნაწილი სხვადასხვაა ამიტომ აუცილებელია page მოაქციოთ კოდის
    // თავში და ბოლოში
        <Page>

          {/* html ის კოდი შეგიძლიათ დააკოპიროთ არსებული თემფლეითიდან მაგრამ უნდა გამოიყენოთ html to jsx კონვერტერი
          ან ააწყოთ თქვენით 0 დან */}

        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">RECENTLY ADDED</h2>
          </div>
          <div className="row tm-mb-90 tm-gallery">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure className="effect-ming tm-video-item">
{/* ასევე დააკვირიდთ ფოტოებს. თუ კოდს დააკოპირებთ htmlდან კონვერტერის მიუხედავად მოგიწევთ მათი შემოტანა ხელით
შესაბამისად src ის შეცვლაც */}
                <img src={movie} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Watch Now</h2>

  {/* ყურადღება მიაქციეთ ლინკებს. აქამდე თუ ვიყენებდით a ტეგს ახლა როუტერის ბიბლიოთეკიდან უნდა გამოვიყენოთ link 
  ტეგი. ზუსტად ისეთივე ლოგიკით როგორც ეს გავაკეთეთ app.js ში ანუ მისამართ უწერთ to ატრიბუტის შიგნით */}

                  <Link to="/movies" href="photo-detail.html">Watch Now</Link>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure className="effect-ming tm-video-item">
                <img src={movie} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Watch Now</h2>
                  <a href="photo-detail.html">Watch Now</a>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure className="effect-ming tm-video-item">
                <img src={movie} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Watch Now</h2>
                  <a href="photo-detail.html">Watch Now</a>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure className="effect-ming tm-video-item">
                <img src={movie} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Watch Now</h2>
                  <a href="photo-detail.html">Watch Now</a>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure className="effect-ming tm-video-item">
                <img src={movie} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Watch Now</h2>
                  <a href="photo-detail.html">Watch Now</a>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
              </div>
            </div><div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure className="effect-ming tm-video-item">
                <img src={movie} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Watch Now</h2>
                  <a href="photo-detail.html">Watch Now</a>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure className="effect-ming tm-video-item">
                <img src={movie} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Watch Now</h2>
                  <a href="photo-detail.html">Watch Now</a>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">12 Sep 2020</span>
                <span>11,300 views</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure className="effect-ming tm-video-item">
                <img src={movie} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Watch Now </h2>
                  <a href="photo-detail.html">Watch Now</a>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">28 Aug 2020</span>
                <span>50,700 views</span>
              </div>
            </div>
      
        
          </div>{" "}
          {/* row */}
          
        </div>

     
      </Page>
 //დავხურეთ page კომპონენტი

      
    )
}