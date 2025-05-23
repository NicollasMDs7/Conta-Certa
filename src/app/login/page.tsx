"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, CircleCheckBig  } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const currentYear = new Date().getFullYear();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="w-full  flex flex-col justify-center items-center">
      <header className="w-full h-24 shadow-md border-b-2">
        <p className="p-8 ml-6 text-4xl font-bold text-blue-500 ">
          Conta Certa
        </p>
      </header>
      <main className="w-full flex justify-center bg-gray-100">
        <div className="w-[50%] flex flex-col justify-center items-center gap-6 py-60 px-32 text-left">
          <div className=" text-left">
            <h2 className="text-4xl md:text-4xl font-bold ">
              Gestão financeira simplificada para você e sua empresa
            </h2>
          </div>

          <div className="w-full ">
            <p className="text-lg md:text-xl text-left">
              Controle suas finanças pessoais e empresariais em um só lugar, com
              gráficos detalhados e relatórios completos para uma melhor tomada
              de decisão.
            </p>
          </div>

          <div className="w-full ">
            <ul className="text-lg md:text-xl space-y-3">
              <li className="flex items-center">
                <span className="mr-2"><CircleCheckBig className="text-blue-500"/></span>
                Controle completo de receitas e despesas
              </li>
              <li className="flex items-center">
                <span className="mr-2"><CircleCheckBig className="text-blue-500"/></span>
                Gráficos e relatórios detalhados
              </li>
              <li className="flex items-center">
                <span className="mr-2"><CircleCheckBig className="text-blue-500"/></span>
                Perfis para uso pessoal e empresarial
              </li>
              <li className="flex items-center">
                <span className="mr-2"><CircleCheckBig className="text-blue-500"/></span>
                Segurança e privacidade dos seus dados
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
          <Card className="w-full max-w-md shadow-lg border-blue-100">
            <CardHeader className="pb-2">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="w-full grid grid-cols-2 mb-4">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="cadastro"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    Cadastro
                  </TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login">
                  <div>
                    <CardTitle className="text-2xl font-semibold text-blue-900">
                      Login
                    </CardTitle>
                    <CardDescription className="text-blue-600/70">
                      Digite suas credenciais para acessar sua conta
                    </CardDescription>
                  </div>

                  <CardContent className="pt-6 pb-2 space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-blue-800">
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="seu@email.com"
                        className="border-blue-200 focus-visible:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="senha" className="text-blue-800">
                        Senha
                      </Label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          id="senha"
                          placeholder="******"
                          className="border-blue-200 focus-visible:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600"
                          aria-label={
                            showPassword ? "Esconder senha" : "Mostrar senha"
                          }
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5">
                      Entrar
                    </Button>
                  </CardContent>

                  <CardFooter className="flex justify-center pt-2 pb-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-700 hover:underline text-sm font-medium"
                    >
                      Esqueceu sua senha?
                    </a>
                  </CardFooter>
                </TabsContent>

                {/* Cadastro Tab */}
                <TabsContent value="cadastro">
                  <div>
                    <CardTitle className="text-2xl font-semibold text-blue-900">
                      Criar Conta
                    </CardTitle>
                    <CardDescription className="text-blue-600/70">
                      Preencha seus dados para criar uma nova conta
                    </CardDescription>
                  </div>

                  <CardContent className="pt-6 pb-2 space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-blue-800">
                        Nome
                      </Label>
                      <Input
                        type="text"
                        id="nome"
                        placeholder="Seu nome completo"
                        className="border-blue-200 focus-visible:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email-cadastro" className="text-blue-800">
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email-cadastro"
                        placeholder="seu@email.com"
                        className="border-blue-200 focus-visible:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="senha-cadastro" className="text-blue-800">
                        Senha
                      </Label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          id="senha-cadastro"
                          placeholder="******"
                          className="border-blue-200 focus-visible:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600"
                          aria-label={
                            showPassword ? "Esconder senha" : "Mostrar senha"
                          }
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5">
                      Criar conta
                    </Button>
                  </CardContent>

                  <CardFooter className="flex justify-center pt-2 pb-4">
                    <p className="text-sm text-blue-600/70">
                      Ao criar uma conta, você concorda com nossos
                      <a
                        href="#"
                        className="text-blue-500 hover:text-blue-700 hover:underline ml-1"
                      >
                        Termos de Serviço
                      </a>
                    </p>
                  </CardFooter>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>
      </main>
    <footer className="bg-white border-t border-blue-100 ">
        <div className="container mx-auto ">
          <p className="text-center text-blue-800 text-sm">
            © {currentYear} Conta Certa. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </section>
  );
}
