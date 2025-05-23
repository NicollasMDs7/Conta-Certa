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
import { Button } from "@/components/ui/button"

export default function Login() {
  const currentYear = new Date().getFullYear();
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
                <span className="mr-2">•</span>
                Controle completo de receitas e despesas
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Gráficos e relatórios detalhados
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Perfis para uso pessoal e empresarial
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Segurança e privacidade dos seus dados
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[50%] flex justify-center items-center     ">
          <Card className="w-[50%] flex justify-center items-center ">
            <CardHeader>
              <CardTitle>
                <Tabs defaultValue="login" className="w-[400px]">
                  <TabsList className="w-full">
                    <TabsTrigger value="login" className="w-[50%]">
                      Login
                    </TabsTrigger>
                    <TabsTrigger value="cadastro" className="w-[50%]">
                      Cadastro
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <Card className="w-[400px]">
                      <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Login</CardTitle>
                        <CardDescription className="text-sm">
                          Digite suas credenciais para acessar sua conta
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-8 justify-center items-center ">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="email">Email</Label>
                          <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="senha">Senha</Label>
                          <Input type="password" id="senha" placeholder="******" />
                        </div>
                        <Button className="w-[80%] flex justify-center items-center bg-blue-500 hover:bg-blue-800">Entrar</Button>
                      </CardContent>
                      <CardFooter className="flex justify-center hover:underline cursor-pointer text-blue-400 hover:text-blue-600">
                        <a href="">Esqueceu sua senha?</a>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="cadastro">
                    <Card>
                      <CardHeader>
                        <CardTitle>Criar Conta</CardTitle>
                        <CardDescription>
                          Preencha seus dados para criar uma nova conta
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                          <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="nome">Nome</Label>
                          <Input type="nome" id="nome" placeholder="Nome" />
                        </div>
                          <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="email">Email</Label>
                          <Input type="email" id="email" placeholder="Email" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p>Card Footer</p>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </main>
      <footer className="">
        <p className="flex items-center justify-center flex-wrap gap-1 font-semibold text-lg">
          © {currentYear} Conta Certa. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
}
