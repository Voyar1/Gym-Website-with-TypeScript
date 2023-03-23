import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto  w-5/6  justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            deserunt! Quo dolore asperiores ipsam quod fugit odit hic ratione
            voluptatem iure, nam, porro a delectus nisi inventore itaque?
            Repellendus soluta, sed facere quod corrupti quisquam accusantium
            eaque excepturi repellat nulla?
          </p>
          <p>All right Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Lorem ipsum, dolor sit amet consectetur</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
