import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/home.module.scss";
import logoImg from "../../public/img/logo.svg";
import * as C from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujeito Pizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt={"Sujeito Pizzaria"} />
        <div className="styles.login">
          <form action="">
            <C.Input type="text" placeholder="Informe seu email" />
            <C.Input type="password" placeholder="Informe sua senha" />
            <C.Button type="submit" loading={false}>
              Cadastrar
            </C.Button>
          </form>
        </div>
      </div>
    </>
  );
}
