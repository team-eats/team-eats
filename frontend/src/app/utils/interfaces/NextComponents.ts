
import React from "react";

export type LayoutProps = {
    children: React.ReactNode
}


type DefaultParams = { slug?: string };
type DefaultSearchParams = { [key: string]: string | string[] | undefined }

export type PageProps<T = DefaultParams, U = DefaultSearchParams> = {
    params: T;
    searchParams: U;
};