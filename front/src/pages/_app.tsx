import Checkbox from '@mui/material/Checkbox'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useForm, SubmitHandler } from 'react-hook-form'
import { createGlobalStyle } from 'styled-components'
import useSWR from 'swr'
import ContentLoader from 'react-content-loader'
import HomeIcon from '@mui/icons-material/Home'

// グローバルのスタイル
const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea{
		padding:0;
		margin:0;
		font-family:-apple-system,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	* {
		box-sizing:border-box;
	}

	a {
		cursor:pointer;
		text-decoration:none;
		transition:0.25s;
		color:#000;
	}

	ol,ul{
		list-style:none;
	}
`


export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta key="charset" name="charset" content="utf-8" />
				<meta
					key="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-size=5"
				/>
				<meta property="og:locale" content="ja_JP" />
				<meta property="og:type" content="website" />
			</Head>
			<GlobalStyle />

			<Component {...pageProps} />
		</>
	)
}