import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/home.module.scss";
import logoImg from "../../public/img/logo.svg";
import * as C from "../components";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.warn("Preencha todos os campos!");
      return;
    }
    setLoading(true);

    const data = {
      email,
      password,
    };

    await signIn(data);

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Sujeito Pizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt={"Sujeito Pizzaria"} />
        <div className={styles.login}>
          <h1>Faça seu Login</h1>
          <form onSubmit={handleLogin}>
            <C.Input
              type="text"
              placeholder="Informe seu email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <C.Input
              type="password"
              placeholder="Informe sua senha"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <C.Button type="submit" loading={loading}>
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
