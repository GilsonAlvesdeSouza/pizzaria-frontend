import React, { useState, FormEvent, useContext } from "react";
import { toast } from "react-toastify";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/home.module.scss";
import logoImg from "../../../public/img/logo.svg";
import * as C from "../../components";
import { AuthContext } from "../../contexts/AuthContext";

export default function Signup() {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    if ((name && email && password) === "") {
      toast.warn("Preencha todos os campos!");
      return;
    }
    setLoading(true);

    await signUp({ name, email, password });

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Sujeito Pizza - Faça seu Cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt={"Sujeito Pizzaria"} />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp} autoComplete="off">
            <C.Input
              type="text"
              placeholder="Informe seu nome"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
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
