import { FormEvent, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/home.module.scss";
import logoImg from "../../public/img/logo.svg";
import * as C from "../components";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    const data = {
      email: "teste@gmail.com",
      password: "12345566",
    };

    await signIn(data);
  };

  return (
    <>
      <Head>
        <title>Sujeito Pizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt={"Sujeito Pizzaria"} />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <C.Input type="text" placeholder="Informe seu email" />
            <C.Input type="password" placeholder="Informe sua senha" />
            <C.Button type="submit" loading={false}>
              Acessar
            </C.Button>
          </form>
          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  );
}
