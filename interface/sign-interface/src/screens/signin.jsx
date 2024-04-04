import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import driveImg from '../assets/drive.svg';
import carImg from '../assets/car.svg';


export function SignIn() {
    return (
      <main className="h-screen flex w-full">
        <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              <CarouselItem>
                <div className="flex aspect-square bg-background rounded p-8">
                  <img src={driveImg} alt="Plataformas" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-square bg-background rounded p-8">
                  <img src={carImg} alt="app de carros" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle  className="text-2xl font-bold tracking-tighter">
                Entre com sua conta
              </CardTitle>
              <CardDescription>
                Utilize seu email e senha ou GitHub para entrar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" placeholder="exemplo@email.com" type="email"/>
              </div>
              <div className="mt-4">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" placeholder="Digite sua Senha..." type="password"/>
              </div>
              <Button className="mt-6 w-full">Entrar</Button>
              <div className="flex items-center gap-6 mt-4">
                <Separator />
                <span className="text-xs text-muted-foreground">OU</span>
                <Separator />
              </div>
              <Button variant="outline" className="mt-4 w-full"> <GitHubLogoIcon className="mr-2"/> Entrar com GitHub</Button>
            </CardContent>
            <CardFooter>
              <p className="text-muted-foreground text-center text-sm">Ao entrar em nossa plataforma você concorda com nossos Termos de uso e Política de privacidade.</p>
            </CardFooter>
          </Card>
        </section>
      </main>
    )
}