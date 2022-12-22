import movie from "../tarkovsky.jpg"
import Page from "./Page";


export function Movies(){
    return(
    // page ში გვაქვს გატანილი ზოგადი ნაწილი. ანუ ნავიგაცია და ფუტერი, რომლის შორისაც იწყვირთება შვილობილი კომპონენტი
    // თითოეული ფაილის მიხედვით შვილობილი კომპონენტის ნაწილი სხვადასხვაა ამიტომ აუცილებელია page მოაქციოთ კოდის
    // თავში და ბოლოში

        <Page>

    {/* html ის კოდი შეგიძლიათ დააკოპიროთ არსებული თემფლეითიდან მაგრამ უნდა გამოიყენოთ html to jsx კონვერტერი
          ან ააწყოთ თქვენით 0 დან */}
          <div className="container-fluid tm-container-content tm-mt-60">
            <div className="row mb-4">
              <h2 className="col-12 tm-text-primary">Movie title </h2>
            </div>
            <div className="row tm-mb-90">
              <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                <img src={movie} alt="Image" className="img-fluid" />
              </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
              <div className="tm-bg-gray tm-video-details">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia
                  reiciendis suscipit laudantium, culpa cupiditate alias non voluptas ad
                quaerat repudiandae numquam sapiente dolorem adipisci tempora mollitia
                possimus labore. Sapiente.
              </p>
              <div className="text-center mb-5">
                <a href="#" className="btn btn-primary tm-btn-big">
                  Download
                </a>
              </div>
              <div>
                <h3 className="tm-text-gray-dark mb-3">Tags</h3>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  Cloud
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  Bluesky
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  Nature
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  Background
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  Timelapse
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  Night
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  Real Estate
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        </Page>
        //დავხურეთ page კომპონენტი

    )
}