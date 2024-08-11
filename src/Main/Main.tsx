import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

export interface IMainProps {
  className?: string;
}

export const Main = ({ className, ...props }: IMainProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[#f4e7e7] border-none border-[#000000] border h-[4095px] relative overflow-hidden " +
        className
      }
    >
      <img
        className="h-[auto] absolute left-[213.44px] top-[-135px] overflow-visible" data-aos ="fade-down"
        style={{ transform: "translate(-32.44px, 66px)" }}
        src="group0.svg"
      />
      <img
        className="h-[auto] absolute left-[483px] top-[550px] overflow-visible" data-aos ="fade-down"
        style={{ transform: "translate(0px, -986.2px)" }}
        src="clip-path-group0.svg"
      />
      <img
        className="h-[auto] absolute left-[1324.23px] top-[1043px] overflow-visible" data-aos = "fade up"
        style={{ transform: "translate(-26.23px, 0px)" }}
        src="mask-group0.svg"
      />
      <img
        className="h-[auto] absolute left-[750px] top-[3775px] overflow-visible" 
        style={{ transform: "translate(-1134.28px, -1086.85px)" }}
        src="clip-path-group1.svg"
      />
      <img
        className="h-[auto] absolute left-[310px] top-[1528.71px] overflow-visible" data-aos = "fade up"
        style={{ transform: "translate(0px, -144.71px)" }} 
        src="group1.svg"
      />
      <div
        className="bg-[#f0c1c1] rounded-[50%] w-[1012px] h-[1012px] absolute left-[-519px] top-[140px]"
        style={{ filter: "blur(250px)" }}
      ></div>
      <div
        className="bg-[rgba(244,183,183,0.75)] rounded-[50%] w-[1126px] h-[1126px] absolute left-[972px] top-[1844px]"
        style={{ filter: "blur(250px)" }}
      ></div>
      <div
        className="bg-[rgba(244,183,183,0.75)] rounded-[50%] w-[533px] h-[533px] absolute left-[-267px] top-[1433px]"
        style={{ filter: "blur(250px)" }}
      ></div>
      <div
        className="bg-[rgba(244,183,183,0.75)] rounded-[50%] w-[1126px] h-[1126px] absolute left-[642px] top-[3333px]" data-aos ="fade-right"
        style={{ filter: "blur(250px)" }}
      ></div>
      <img
        className="h-[auto] absolute left-[34px] top-[211px] overflow-visible" data-aos ="fade-right"
        src="mask-group1.svg"
      />
      <img
        className="h-[auto] absolute left-[418px] top-[780.83px] overflow-visible" data-aos ="fade-up"
        style={{ transform: "translate(0px, -71.83px)" }}
        src="mask-group2.svg"
      />
      <img
        className="h-[auto] absolute left-[109px] top-[2375.26px] overflow-visible" data-aos ="fade-up"
        style={{ transform: "translate(0px, -36.26px)" }}
        src="mask-group3.svg"
      />
      <img
        className="h-[auto] absolute left-[1174.85px] top-[2434px] overflow-visible" data-aos ="fade-up"
        style={{ transform: "translate(-5.85px, 0px)" }}
        src="mask-group4.svg"
      />
      <img
        className="h-[auto] absolute left-[695px] top-[2688.89px] overflow-visible" data-aos ="fade-up"
        style={{ transform: "translate(0px, -33.89px)" }}
        src="mask-group5.svg"
      />
      <img
        className="h-[auto] absolute left-[1225px] top-[3112.09px] overflow-visible" data-aos ="fade-up"
        style={{ transform: "translate(0px, -39.09px)" }}
        src="mask-group6.svg"
      />
      <img
        className="h-[auto] absolute left-[574.48px] top-[3767px] overflow-visible" data-aos ="fade-up"
        style={{ transform: "translate(-34.48px, 0px)" }}
        src="mask-group7.svg"
      />
      <img
        className="h-[auto] absolute left-[71.5px] top-[1178px] overflow-visible" data-aos ="fade-right"
        style={{ transform: "translate(-22.5px, 0px)" }}
        src="mask-group8.svg"
      />
      <img
        className="h-[auto] absolute left-[984px] top-[1584.06px] overflow-visible" data-aos ="fade-up"
        style={{ transform: "translate(0px, -34.06px)" }}
        src="mask-group9.svg"
      />
      <div className="text-left font-['-',_sans-serif] text-2xl font-normal absolute left-[160px] top-[42px] w-[199px] h-[96px]" data-aos ="fade-down">
        <span>
          <span className="everything-about-fithra-span font-semibold">
            everything about
            <br />
          </span>
          <span className="everything-about-fithra-span2 text-[#7B1919] font-[775]">FITHRA.</span>
        </span>{" "}
      </div>
      <div className="w-[581px] h-[30px] static" data-aos ="fade-down">
        <div className="text-[#000000] text-left font-['Outfit',_sans-serif] text-xl font-medium absolute left-[635px] top-[52.5px] w-[82px] h-[30px] hover:rounded md:hover:bg-red-500 hover:transition duration-300">
        <button>
          <a href="http://localhost:5173/">PROFILE</a>
        </button>{" "}
        </div>
        <button className="text-left font-['Outfit',_sans-serif] text-xl font-medium absolute left-[742px] top-[51px] w-[105px] h-[30px] hover:rounded md:hover:bg-red-500 hover:transition duration-300">
          <a href="#aboutMe">
          <span>
            <span className="about-me-span">ABOUT </span>
            <span className="about-me-span2 text-[#7B1919]">ME</span>
          </span>{" "}
          </a>
        </button>
        <button className="text-[#000000] text-left font-['Outfit',_sans-serif] text-xl font-medium absolute left-[872px] top-[51px] w-[102px] h-[30px] hover:rounded md:hover:bg-red-500 hover:transition duration-300">
          <a href="#project">
          PROJECTS{" "}
          </a>
        </button>
        <button className="text-[#000000] text-left font-['Outfit',_sans-serif] text-xl font-medium absolute left-[990px] top-[51px] w-[138px] h-[30px] hover:rounded md:hover:bg-red-500 hover:transition duration-300">
          <a href="#achievements">ACHIEVEMENTS{" "}</a>
        </button>
        <button className="text-left font-['Outfit',_sans-serif] text-xl font-medium absolute left-[1162px] top-[51px] w-[131px] h-[30px] hover:rounded md:hover:bg-red-500 hover:transition duration-300">
          <a href="#contactMe">
          <span>
            <span className="contact-me-span">CONTACT </span>
            <span className="contact-me-span2 text-[#7B1919]">ME</span>
          </span>{" "}
          </a>
        </button>
      </div>
      <div className="w-[379.9px] h-[515.04px] static">
        <div
          className="rounded-[50%] border border-solid border-[#7B1919] bg-[#F44B4B] w-[379.9px] h-[379.9px] absolute left-[900px] top-[321.14px] " data-aos ="fade-left"
          style={{
            borderImageSlice: "1",
            boxShadow:
              "0px 0px 7.29px 0px rgba(244, 75, 75, 1.00),  0px 0px 25.5px 0px rgba(244, 75, 75, 1.00),  0px 0px 51px 0px rgba(244, 75, 75, 1.00),  0px 0px 87.44px 0px rgba(244, 75, 75, 1.00),  0px 0px 153.01px 0px rgba(244, 75, 75, 1.00)",
            filter: "blur(1.82px)",
          }}
        ></div>
        <img
          className="rounded-[210px] border-none border-[rgba(0,0,0,0.00)] border w-[341.61px] h-[515.04px] absolute left-[922.52px] top-[186px]" data-aos ="fade-up" data-aos-delay ="2000"
          style={{
            objectFit: "cover",
          }}
          src="_579-fece-1-0-c-69-488-b-adfe-89-b-0-a-6435-d-48-removebg-preview-10.png"
        />
      </div>
      <div className="text-[#000000] text-left font-['Outfit-SemiBold',_sans-serif] text-2xl font-semibold absolute left-40 top-[365px] w-[244px] h-[21px]" data-aos ="fade-right">
        Hello guys! It’s <span className= "span text-[#7B1919]">me</span>!
        <br />{" "}
      </div>
      <div className="text-[#595959] text-left font-['Outfit',_sans-serif] text-xl font-medium absolute left-40 top-[460px] w-[244px] h-[21px]" data-aos ="fade-right">
        Software Engineer
        <br />{" "}
      </div>
      <div className="text-[#000000] text-left font-['Outfit-Regular',_sans-serif] text-xl font-normal absolute left-40 top-[521px] w-[645px] h-[125px]" data-aos ="fade-right">
        I introduce you to a 17 year old boy who has an interest in software
        development. I am currently studying at one of the well-known institutes
        in Indonesia, Bandung Institute of Technology. I am very enthusiastic
        about improving my skills in the world of programming in the future.
        Enjoy reading my page!{" "}
      </div>
      <div className="text-left font-['Outfit-Bold',_sans-serif] text-5xl font-bold absolute left-40 top-[399px] w-[665px] h-[60px]">
        <span>
          <span className="muhammad-fithra-rizki-span" data-aos="fade-up" data-aos-delay="500">Muhammad </span>
          <span className="muhammad-fithra-rizki-span2 text-[#7B1919]" data-aos="fade-down" data-aos-delay="1000">Fithra </span>
          <span className="muhammad-fithra-rizki-span3" data-aos="fade-up" data-aos-delay="1500">Rizki</span>
        </span>{" "}
      </div>
      <div id="aboutMe" className="text-center font-['Outfit-Bold',_sans-serif] text-5xl font-bold absolute left-[587px] top-[1100px] w-[265px] h-[60px]" data-aos = "fade-down">
        <span>
          <span className="my-interest-span text-[#7B1919]">My </span>
          <span className="my-interest-span2">Interest</span>
        </span>{" "}
      </div>
      <div className="w-[268px] h-[324px] static" >
        <img
          className="w-[268px] h-[324px] absolute left-[252px] top-[1682px] hover:rounded-[10%] md:hover:bg-red-500 hover:transition duration-300" data-aos = "fade-right"  
          style={{
            borderImageSlice: "1",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0)",
          }}
          src = "Group 5.png"
        ></img>
      </div>
      <div className="w-[269px] h-[324px] static">
        <img
          className="w-[268px] h-[324px] absolute left-[586px] top-[1682px] hover:rounded-[10%] md:hover:bg-red-500 hover:transition duration-300" data-aos = "fade-up"
          style={{
            borderImageSlice: "1",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0)",
          }}
          src = "Group 6.png"
        ></img>
      </div>
      <div className="w-[268px] h-[324px] static">
        <img
          className="w-[268px] h-[324px] absolute left-[917px] top-[1682px] hover:rounded-[10%] md:hover:bg-red-500 hover:transition duration-300" data-aos="fade-left"
          style={{
            borderImageSlice: "1",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0)",
          }}
          src = "Group 7.png"
        ></img>
      </div>
      <button className="w-[268px] h-[324px] static" >
        <img
          className="w-[268px] h-[324px] absolute left-[252px] top-[1186px] hover:rounded-[10%] md:hover:bg-red-500 hover:transition duration-300" data-aos = "fade-right"
          style={{
            borderImageSlice: "1",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0)",
          }}
          src = "Group 8.png"
        ></img>
      </button>
      <div className="w-[269px] h-[324px] static">
        <img
          className=" w-[268px] h-[324px] absolute left-[586px] top-[1185px] hover:rounded-[10%] md:hover:bg-red-500 hover:transition duration-300" data-aos = "fade-up"
          style={{
            borderImageSlice: "1",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0)",
          }}
          src = "Group 9.png"
        ></img>
      </div>
      <div className="w-[268px] h-[324px] static">
        <img
          className="w-[268px] h-[324px] absolute left-[917px] top-[1185px] hover:rounded-[10%] md:hover:bg-red-500 hover:transition duration-300" data-aos = "fade-left"
          style={{
            borderImageSlice: "1",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0)",
          }}
          src = "Group 10.png"
        ></img>
      </div>
      <div className="text-center font-['Outfit-Bold',_sans-serif] text-5xl font-bold absolute left-[587px] top-[1588px] w-[265px] h-[60px]" data-aos = "fade-down">
        <span>
          <span className="my-talent-span text-[#7B1919]">My </span>
          <span className="my-talent-span2">Talent</span>
        </span>{" "}
      </div>
      <div id="project" className="text-left font-['Outfit-Bold',_sans-serif] text-5xl font-bold absolute left-40 top-[2100px] w-[399px] h-[60px]" data-aos="fade-down">
        <span>
          <span className="all-of-my-project-span">All of </span>
          <span className="all-of-my-project-span2 text-[#7B1919]">My Project</span>
        </span>{" "}
      </div>
      <div
        className="bg-[#7b1919] rounded-[30px] w-[1045px] h-[236px] absolute left-[197px] top-[2192px]" data-aos ="fade-right"
        style={{ boxShadow: "0px 8px 4px 0px rgba(0, 0, 0, 0.25)" }}
      ></div>
      <div
        className="bg-[#7b1919] rounded-[30px] w-[1045px] h-[236px] absolute left-[197px] top-[2480px]" data-aos ="fade-left"
        style={{ boxShadow: "0px 8px 4px 0px rgba(0, 0, 0, 0.25)" }}
      ></div>
      <div
        className="bg-[#7b1919] rounded-[30px] w-[1045px] h-[236px] absolute left-[198px] top-[2767px]" data-aos ="fade-right"
        style={{ boxShadow: "0px 8px 4px 0px rgba(0, 0, 0, 0.25)" }}
      ></div>
      <img
        className="w-[305px] h-[182px] absolute left-[235px] top-[2219px]" data-aos ="fade-left"
        style={{ objectFit: "cover" }}
        src="makrab.jpg"
      />
      <img
        className="w-[305px] h-[182px] absolute left-[235px] top-[2798px]" data-aos ="fade-right"
        style={{ objectFit: "cover" }}
        src="rectangle-140.png"
      />
      <img
        className="w-[305px] h-[182px] absolute left-[900px] top-[2507px]" data-aos ="fade-left"
        style={{ objectFit: "cover" }}
        src="tubes.png"
      />
      <div className="w-[190px] h-[57px] static">
        <a href="https://www.canva.com/design/DAGH7p1he1U/mcXpn1VG5toYZzl2VgBYWA/edit?utm_content=DAGH7p1he1U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <div className="bg-[#f44b4b] rounded-[30px] w-[190px] h-[53px] absolute left-[1015px] top-[2350px]" data-aos ="fade-right"></div>
          <div className="text-[#ffffff] text-center font-['Outfit-Regular',_sans-serif] text-xl font-normal absolute left-[1015px] top-[2348px] w-[190px] h-[57px] flex items-center justify-center" data-aos ="fade-right">
            LEARN MORE{" "}
        </div>
        </a>
      </div>
      <div className="w-[190px] h-[57px] static">
        <a href="https://github.com/Labpro-21/if1210-2024-tubes-k07-f">
          <div className="bg-[#f44b4b] rounded-[30px] w-[190px] h-[53px] absolute left-[1015px] top-[2925px]" data-aos ="fade-left"></div>
          <div className="text-[#ffffff] text-center font-['Outfit-Regular',_sans-serif] text-xl font-normal absolute left-[1015px] top-[2923px] w-[190px] h-[57px] flex items-center justify-center" data-aos ="fade-left">
            LEARN MORE{" "}
          </div>
        </a>
      </div>
      <div className="w-[190px] h-[57px] static">
        <div className="bg-[#f44b4b] rounded-[30px] w-[190px] h-[53px] absolute left-[235px] top-[2641px]" data-aos ="fade-right"></div>
        <div className="text-[#ffffff] text-center font-['Outfit-Regular',_sans-serif] text-xl font-normal absolute left-[235px] top-[2639px] w-[190px] h-[57px] flex items-center justify-center" data-aos ="fade-right">
          LEARN MORE{" "}
        </div>
      </div>
      <div className="text-[#ffffff] text-left font-['Outfit-Regular',_sans-serif] text-xl font-normal absolute left-[575px] top-[2219px] w-[610px] h-[109px]" data-aos="fade-up">
      <span className="font-semibold">STEI-Kesyen</span> merupakan kegiatan malam keakraban yang diadakan untuk massa Syntax ’23. 
      STEI-Kesyen berhasil diadakan pada tanggal 4-5 Mei dan dihadiri oleh 262 massa yang mengikuti rangkaian acara, 
      dengan rincian 89 panitia dan 173 peserta.{" "}
      </div>
      <div className="text-[#ffffff] text-left font-['Outfit-Regular',_sans-serif] text-xl font-normal absolute left-[574px] top-[2798px] w-[631px] h-[109px]" data-aos="fade-up">
        Portal resmi dari Nike, Inc., yang menampilkan berbagai produk dan
        layanan terkait olahraga dan gaya hidup. Situs ini menyediakan akses ke
        koleksi lengkap sepatu, pakaian, dan aksesori untuk pria, wanita, dan
        anak-anak, dengan fokus pada inovasi dan performa atletik.{" "}
      </div>
      <div className="text-[#ffffff] text-right font-['Outfit-Regular',_sans-serif] text-xl font-normal absolute left-[255px] top-[2507px] w-[608px] h-[109px]" data-aos="fade-up">
      Pada tugas besar Dasar Pemrograman IF1210, kami sebagai satu kelompok, diminta untuk membantu Agent P,  Purry si Platypus, 
      untuk mengalahkan Dr. Asep Spakbor yang menciptakan monster-monster untuk mengancam keamanan kota Danville. {" "}
      </div>
      <div id="achievements" className="text-center font-['Outfit-Bold',_sans-serif] text-5xl font-bold absolute left-[479px] top-[3109px] w-[482px] h-[60px]" data-aos ="fade-down"> 
        <span>
          <span className="my-achievements-span text-[#7B1919]">My </span>
          <span className="my-achievements-span2">Achievements</span>
        </span>{" "}
      </div>
      <button>
        <img
          className="w-[314px] h-[305.55px] absolute left-[232px] top-[3199.14px] hover:rounded-[5%] md:hover:bg-red-300 hover:transition duration-300" data-aos ="fade-right"
          style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0)"}}
          src="Group 21.png"
        />
      </button>
      <img
        className="w-[314px] h-[305.55px] absolute left-[561.92px] top-[3199.14px] hover:rounded-[5%] md:hover:bg-red-300 hover:transition duration-300" data-aos ="fade-down"
        style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0)"}}
        src="Group 24.png"
      />
      <button>
      <img
        className="w-[314px] h-[305.55px] absolute left-[562px] top-[3536px] hover:rounded-[5%] md:hover:bg-red-300 hover:transition duration-300" data-aos ="fade-up"
        style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0)"}}
        src="Group 27.png"
      />
      </button>
      <button>
      <img
        className="w-[314px] h-[305.55px] absolute left-[233px] top-[3536px] hover:rounded-[5%] md:hover:bg-red-300 hover:transition duration-300" data-aos ="fade-right"
        style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0)"}}
        src="Group 32.png"
      />
      </button>
      <button>
      <img
        className="w-[314px] h-[305.55px] absolute left-[893px] top-[3536px] hover:rounded-[5%] md:hover:bg-red-300 hover:transition duration-300" data-aos ="fade-left"
        style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0)"}}
        src="Group 33.png"
      />
      </button>
      <button>
      <img
        className="w-[314px] h-[305.55px] absolute left-[897px] top-[3199.14px] hover:rounded-[5%] md:hover:bg-red-300 hover:transition duration-300" data-aos ="fade-left"
        style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0)"}}
        src="Group 34.png"
      />
      </button>
      <div id="contactMe" className="bg-[#000000] w-full h-[150px] absolute left-0 top-[3945px]"></div>
      <img
        className="h-[237.48] w-[2019.72px] absolute left-[0px] top-[3875px]"
        src="Group 1000.png"
      />
      <div className="text-left font-['-',_sans-serif] text-3xl font-normal absolute left-[160px] top-[3985px] w-[295px] h-[75px]">
        <span>
          <span className="everything-about-fithra-2-span text-[#F4E7E7] font-semibold">
            everything about
            <br />
          </span>
          <span className="everything-about-fithra-2-span2 text-[#7B1919] font-[775]">FITHRA.</span>
        </span>{" "}
      </div>
      <a href="https://instagram.com/fithrarzk">
      <img
        className="w-[60px] h-[60px] absolute left-[933px] top-[3995px] overflow-visible"
        style={{ objectFit: "cover" }}
        src="ig.png"
      />
      </a>
      <a href="https://x.com/fithrafathri">
      <img
        className="w-[53px] h-[44px] absolute left-[1024px] top-[4002px] overflow-visible"
        src="twit-10.svg"
      />
      </a>
      <a href="https://github.com/fithrarzk">
      <img
        className="w-[53px] h-[50px] absolute left-[1119px] top-[3997px] overflow-visible"
        src="git-10.svg"
      />
      </a>
      <a href="https://www.linkedin.com/in/fithrarizki/">
        <img
        className="w-[53px] h-[53px] absolute left-[1214px] top-[3995px]"
        style={{ objectFit: "cover" }}
        src="linkedin-10.png"
        />
      </a>
    </div>
        
  );
};
