import Card from "@/components/card";
import { SchoolIcon } from "@/components/svg/school-icon";
import { CSSIcon } from "@/components/svg/technologies-icons/css-icon";
import { HTMLIcon } from "@/components/svg/technologies-icons/html-icon";
import { NextjsIcon } from "@/components/svg/technologies-icons/nextjs-icon";
import { PostgresqlIcon } from "@/components/svg/technologies-icons/postgresql-icons";
import { ReactIcon } from "@/components/svg/technologies-icons/react-icon";
import { TailwindIcon } from "@/components/svg/technologies-icons/tailwind-icon";
import { TypescriptIcon } from "@/components/svg/technologies-icons/typescript-icon";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="space-y-8">
      <Card>
        <h1 className="text-3xl mb-6 text-blue-400 text-center"><b>{t('aboutTitle')}</b></h1>
        <p className="text-base">{t('aboutContent')}</p>

        <div className="flex flex-col items-start mt-8 space-y-2">
          <div className="flex">
            <SchoolIcon className="mr-2 fill-white" width="1.5em" height="1.5em" />
            <p className="text-base">{t('secondCourse')}</p>
          </div>
          <div className="flex">
            <SchoolIcon className="mr-2 fill-white" width="1.5em" height="1.5em" />
            <p className="text-base">{t('firstCourse')}</p>
          </div>
        </div>
      </Card>

      <div className="p-8 md:p-16 md:pt-8">
        <h1 className="text-3xl mb-6 text-blue-400 text-center"><b>{t('tech')}</b></h1>
        <div className="flex flex-wrap items-center justify-center gap-4 px-2">
          <TypescriptIcon className="fill-white transition-transform hover:scale-125" />
          <PostgresqlIcon className="fill-white transition-transform hover:scale-125" />
          <ReactIcon className="fill-white transition-transform hover:scale-125" />
          <NextjsIcon className="fill-white transition-transform hover:scale-125" />
          <TailwindIcon className="fill-white transition-transform hover:scale-125" />
          <HTMLIcon className="fill-white transition-transform hover:scale-125" />
          <CSSIcon className="fill-white transition-transform hover:scale-125" />
        </div>
      </div>


    </main>
  );
}