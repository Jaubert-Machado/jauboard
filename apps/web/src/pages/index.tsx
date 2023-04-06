import Head from "next/head";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import * as S from "../styles/login.styles";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/login";
import { useRouter } from "next/router";
import Input from "@/components/Input";
import { useLoginMutation } from "@/redux/services/user.api";

export default function Login() {
  const [login] = useLoginMutation();
  const navigation = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function onValid(input: any) {
    try {
      const res = await login(input).unwrap();

      if (res.result === "success") {
        navigation.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Jauboard</title>
        <meta name="description" content="Jauboard dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Container>
        <S.Header>
          <S.Title>Login</S.Title>
          <S.Register>
            Não possui uma conta?{" "}
            <S.RegisterLink href="/register">Registre-se</S.RegisterLink>{" "}
          </S.Register>
        </S.Header>
        <S.Form onSubmit={handleSubmit(onValid)}>
          <S.InputContainer>
            <Input type="email" label="E-mail" register={register} />
            <Input type="password" label="Senha" register={register} />
            <S.PasswordText>Esqueceu sua senha?</S.PasswordText>
          </S.InputContainer>
          <Button>Login</Button>
        </S.Form>
      </S.Container>
    </>
  );
}
