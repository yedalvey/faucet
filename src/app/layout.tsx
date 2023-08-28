import { Providers } from './providers'
import 'styles/global.css'
import { ConfigProvider } from 'antd';
import theme from 'theme/themeConfig';

export const metadata = {
  title: 'BLEX | Super Referral',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-custom-dark">
      <body>
        <ConfigProvider theme={theme}>
          <Providers>{children}</Providers>
        </ConfigProvider>
      </body>
    </html>
  )
}
