import './app.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, } from 'react-router-dom';
import img1 from '../../imgs/img1.png';
import img2 from '../../imgs/img2.png';
import img3 from '../../imgs/img3.png';
import img4 from '../../imgs/img4.png';
import img5 from '../../imgs/img5.png';
import img6 from '../../imgs/img6.png';
import img7 from '../../imgs/img7.png';
import img8 from '../../imgs/img8.png';
import img9 from '../../imgs/img9.png';
import img10 from '../../imgs/img10.png';
import img11 from '../../imgs/img11.png';
import img12 from '../../imgs/img12.png';
import img13 from '../../imgs/img13.png';
import img14 from '../../imgs/img14.png';
import img15 from '../../imgs/img15.png';
import img16 from '../../imgs/img16.png';
import img17 from '../../imgs/img17.png';
import img18 from '../../imgs/img18.png';
import img19 from '../../imgs/img19.png';
import img20 from '../../imgs/img20.png';
import img21 from '../../imgs/img21.png';
import img22 from '../../imgs/img22.png';
import img23 from '../../imgs/img23.png';
import img24 from '../../imgs/img24.png';
import img25 from '../../imgs/img25.png';
import img26 from '../../imgs/img26.png';
import img27 from '../../imgs/img27.png';
import img28 from '../../imgs/img28.png';
import img29 from '../../imgs/img29.png';
import img30 from '../../imgs/img30.png';
import img31 from '../../imgs/img31.png';
import img32 from '../../imgs/img32.png';
import img33 from '../../imgs/img33.png';


import List from "../lists/List";
import Nav from "../nav/Nav";
import FilterNav from "../filter-nav/FilterNav";
import Header from "../header/Header";
import BorderBar from "../border-bar/BorderBar";
import VideoCardRow from "../video-card-row/VideoCardRow";
import NewsList from "../news-list/NewsList";
import HomePage from "../home-page/HomePage";
import Footer from "../footer/Footer";
import ErrorPage from "../error-page/ErrorPage";
import FlexPage from "../flex-page/FlexPage";
import PersonalPage from "../personal-page/PersonalPage";
import Form from '../form/Form';
import {useState} from "react";



// data consts //

const data = [
    {
        id: 1,
        img: img1,
        title: "Asosiy savdo hamkorlar, oltin eksporti va gaz importi – O‘zbekistonning 2023 yil birinchi...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "iqtisodiyot",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 853
    },
    {
        id: 2,
        img: img2,
        title: "AQSHda 230 mingdan ortiq davlat xizmatchisining shaxsiy ma’lumotla...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "dunyo",
        grade: "olovli",
        date: "20 May, 2022",
        views: 705
    },
    {
        id: 3,
        img: img3,
        title: "Sun’iy intellekt yadro urushini qo‘zg‘ashi mumkin – NYT",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "texno",
        grade: "olovli",
        date: "20 May, 2022",
        views: 934
    },
    {
        id: 4,
        img: img4,
        title: "Bill Geyts Ilon Maskning sun’iy intellekt haqidagi taklifiga qarshi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "texno",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 984
    },
    {
        id: 5,
        img: img5,
        title: "Xalqaro moliyaviy hakerlar 3ta o‘zbek bankidan millionlab dollar o‘margan bo‘lishi mumkin",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "iqtisodiyot",
        grade: "olovli",
        date: "20 May, 2022",
        views: 959
    },
    {
        id: 6,
        img: img6,
        title: "YeIning yangi sanksiyalar paketidan O‘zbekiston kompaniyalari ham joy oladi - OAV",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "iqtisodiyot",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 600
    },
    {
        id: 7,
        img: img7,
        title: "Mudiraning o‘g‘li bog‘chada qizlarga tegajog‘lik qilgani bo‘yicha jinoyat ishi qo‘zg‘atildi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "eng",
        date: "20 May, 2022",
        views: 1208
    },
    {
        id: 8,
        img: img8,
        title: "Xitoy butun dunyodan yashirincha ravishda kosmik kema qurgani ma’lum bo‘ldi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "texno",
        grade: "olovli",
        date: "20 May, 2022",
        views: 1104
    },
    {
        id: 9,
        img: img9,
        title: "Pekin AQSHning Xitoy-Yevropa munosabatlariga...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 0
    },
    {
        id: 10,
        img: img10,
        title: "Falastin guruhlari G‘azoga qilingan hujumlar uchun...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 1006
    },
    {
        id: 11,
        img: img11,
        title: "Mirziyoyev 5 nafar urush qatnashchisini ko‘rishga bordi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "olovli",
        date: "20 May, 2022",
        views: 756
    },
    {
        id: 12,
        img: img12,
        title: "9 May Rossiya uchun global qudratini qumsash bayrami – Rabbimov",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 9102
    },
    {
        id: 13,
        img: img13,
        title: "Messini ortga qaytarish “Barselona” rejalarida yo‘q – klub vitse-prezidenti",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "sport",
        grade: "trend",
        date: "20 May, 2022",
        views: 843
    },
    {
        id: 14,
        img: img14,
        title: "Erdo‘g‘an Qilichdoro‘g‘lini AQSHdan ko‘rsatma olganlik...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 962
    },
    {
        id: 15,
        img: img15,
        title: "Uzcard va Humo bankomatlarini integratsiyalash bo‘yicha texnik ishlar yakunlandi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "iqtisodiyot",
        grade: "olovli",
        date: "20 May, 2022",
        views: 823
    },
    {
        id: 16,
        img: img16,
        title: "Dubayda marjon rifli dunyodagi eng katta turar joy maydoni quriladi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "iqtisodiyot",
        grade: "olovli",
        date: "20 May, 2022",
        views: 1345
    },
    {
        id: 17,
        img: img17,
        title: "Oqqo‘rg‘onda arxeologiya yodgorligining yer maydoni ijaraga berib yuborilgani aniqlandi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "iqtisodiyot",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 1002
    },
    {
        id: 18,
        img: img18,
        title: "Estoniya YeIni Kiyevga yordamni YaIMning 1 foizigacha oshirishga chaqirdi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 1001
    },
    {
        id: 19,
        img: img19,
        title: "Dunyodagi eng qimmat muzqaymoq Ginnes rekordlar...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "iqtisodiyot",
        grade: "trend",
        date: "20 May, 2022",
        views: 974
    },
    {
        id: 20,
        img: img20,
        title: "Modrich “Real” va “Man Siti”ning YeCHL finaliga chiqish imkoniyatlarini baholadi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "sport",
        grade: "olovli",
        date: "20 May, 2022",
        views: 504
    },
    {
        id: 21,
        img: img21,
        title: "Erdo‘g‘an Turkiya konstitutsiyasiga LGBTga qarshi...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "olovli",
        date: "20 May, 2022",
        views: 1204
    },
    {
        id: 22,
        img: img22,
        title: "Xitoyda dunyodagi eng tez harakatlanuvchi poyezd ishga tushiriladi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "texno",
        grade: "olovli",
        date: "20 May, 2022",
        views: 405
    },
    {
        id: 23,
        img: img23,
        title: "JCHda chorak finalga yo‘l olgan o‘zbek bokschilari soni 5 nafarga ko‘paydi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "sport",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 503
    },
    {
        id: 24,
        img: img24,
        title: "O‘zbekistonda ilmiy-ta’lim sun’iy yo‘ldoshi ishlab ",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "texno",
        grade: "trend",
        date: "20 May, 2022",
        views: 734
    },
    {
        id: 25,
        img: img25,
        title: "Rutube YouTube bilan raqobatlashish uchun 367 mln dollar sarflamoqchi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "iqtisodiyot",
        grade: "olovli",
        date: "20 May, 2022",
        views: 641
    },
    {
        id: 26,
        img: img26,
        title: "Bokschi Mo‘ydinxo‘jayev jahon chempioni bo‘ldi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "sport",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 504
    },
    {
        id: 27,
        img: img27,
        title: "Germaniya Ukraina uchun eng yirik harbiy paket tayyorlamo...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 728
    },
    {
        id: 28,
        img: img28,
        title: "Toshkentda Spark ag‘darilib ketishi oqibatida 3 kishi ....",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 1042
    },
    {
        id: 29,
        img: img29,
        title: "Buxoroda ekstremistik g‘oyalarni targ‘ib qilgan shax...",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "eng",
        date: "20 May, 2022",
        views: 735
    },
    {
        id: 30,
        img: img30,
        title: "Apple yana bir davlatda iPhone telefonlarini yig‘ishni boshlaydi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "texno",
        grade: "olovli",
        date: "20 May, 2022",
        views: 803
    },
    {
        id: 31,
        img: img31,
        title: "O‘zbekistonlik bokschilar JCHda 9 ta medal va 450 ming AQSH dollarini naqd qildi",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "sport",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 701
    },
    {
        id: 32,
        img: img32,
        title: "Putinning Gurjiston orzusi: u viza rejimini nega bekor qildi.",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "jamiyat",
        grade: "tezkor",
        date: "20 May, 2022",
        views: 654
    },
    {
        id: 33,
        img: img33,
        title: "Asli o‘zbekistonlik biznesmen Ronalduga 1,5 mlrd so‘mlik soat sovg‘a qildi (foto)",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum magni neque nulla tenetur. Doloremque iure rem suscipit. Iusto, repudiandae.",
        type: "sport",
        grade: "trend",
        date: "20 May, 2022",
        views: 561
    }
];

const homeData = data.slice(0, 8);
const homedata2 = data.slice(14, 18);
const sportData = data.filter(item => item.type == "sport");
const shortSportData = sportData.slice(0, 4);
const texnoData = data.filter(item => item.type == "texno");
const shortTexnoData = texnoData.slice(0, 4);
const iqtisod = data.filter(item => item.type == "iqtisodiyot");
const jamiyat = data.filter(item => item.type == "jamiyat");
const texno = data.filter(item => item.type == "texno");
const sport = data.filter(item => item.type == "sport");
const olovli = data.filter(item => item.grade == "olovli");
const eng = data.filter(item => item.grade == "eng");
const tezkor = data.filter(item => item.grade == "tezkor");
const most = data.filter(item => item.views >= 900);



function App() {

  return (
      <div className="dashboard">
          <Router>
              <Nav />
              {/*<FilterNav/>*/}
              <Routes>
                  <Route path="/" exact element={<HomePage homeData={homeData} shortSportData={shortSportData} shortTexnoData={shortTexnoData} homeData2={homedata2} />}/>
                  <Route path="/iqtisod" element={<FlexPage word={"Iqtisod"} data={iqtisod}/>}/>
                  <Route path="/jamiyat" element={<FlexPage word={"Jamiyat"} data={jamiyat}/>}/>
                  <Route path="/texno" element={<FlexPage word={"Texnologiya"} data={texno}/>}/>
                  <Route path="/sport" element={<FlexPage word={"Sport"} data={sport}/>}/>
                  <Route path="*" element={<ErrorPage/>}/>
                  <Route path="/olovli" element={<FlexPage word={"Olovli yangiliklar"} icon={"bi bi-fire"} data={olovli} />}/>
                  <Route path="/eng" element={<FlexPage word={"Eng mashhur"} icon={"bi bi-heart-fill"} data={eng} />}/>
                  <Route path="/trend" element={<FlexPage word={"Trend yangiliklar"} icon={"bi bi-lightning-fill"} data={tezkor} />}/>
                  <Route path="/views" element={<FlexPage word={"Eng ko'p tomosha qilingan"} icon={"bi bi-eye-fill"} data={most} />}/>
                  {data.map(item => (<Route path={`/${item.id}`} element={<PersonalPage id={item.id} img={item.img} type={item.type} title={item.title} discription={item.discription} data={data}/>} />))}
                  <Route path="/aloqa" element={<Form/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;