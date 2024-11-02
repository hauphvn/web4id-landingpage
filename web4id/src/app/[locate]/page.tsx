import Link from "next/link";
import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";

export default function Home() {
  const t = useTranslations('Homepage');
  return (
      <div>
        <Button>{t('title')}</Button>
        <Button asChild>
          <Link href={"/about"}>{t('about')}</Link>
        </Button>
      </div>
  );
}
