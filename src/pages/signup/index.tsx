import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/home.module.scss";
import logoImg from "../../../public/img/logo.svg";
import * as C from "../../components";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sujeito Pizza - Faça seu Cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt={"Sujeito Pizzaria"} />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form action="">
            <C.Input type="text" placeholder="Informe seu nome" />
            <C.Input type="text" placeholder="Informe seu email" />
            <C.Input type="password" placeholder="Informe sua senha" />
            <C.Button type="submit" loading={false}>
              Cadastrar
            </C.Button>
          </form>
          <Link href="/" legacyBehavior>
            <a className={styles.text}>Já possui uma conta? Faça login</a>
          </Link>
        </div>
      </div>
    </>
  );
}
