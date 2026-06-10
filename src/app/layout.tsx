import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Black Cut Barbershop Almaty | Премиум Стрижки и Бритье',
  description: 'Откройте для себя Black Cut – лучший барбершоп в Алматы. Профессиональные стрижки, уход за бородой и королевское бритье в атмосфере роскоши и стиля. Запишитесь онлайн!',
  keywords: ["барбершоп алматы, мужские стрижки, бритье, уход за бородой, black cut, премиум барбершоп"],
  openGraph: {
    "title": "Black Cut Barbershop Almaty | Премиум Стрижки и Бритье",
    "description": "Откройте для себя Black Cut – лучший барбершоп в Алматы. Профессиональные стрижки, уход за бородой и королевское бритье в атмосфере роскоши и стиля. Запишитесь онлайн!",
    "url": "https://www.blackcut.kz",
    "siteName": "Black Cut Barbershop",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-holding-juice-while-getting-haircut_613910-5727.jpg",
        "alt": "Modern dark barbershop interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Black Cut Barbershop Almaty | Премиум Стрижки и Бритье",
    "description": "Откройте для себя Black Cut – лучший барбершоп в Алматы. Профессиональные стрижки, уход за бородой и королевское бритье в атмосфере роскоши и стиля. Запишитесь онлайн!",
    "images": [
      "http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-holding-juice-while-getting-haircut_613910-5727.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
