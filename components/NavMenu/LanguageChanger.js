import { useRouter } from "next/router";
import { Dropdown } from "react-bootstrap";
import { i18n } from "../../i18n";

export default function LanguageChanger({ t }) {
  const router = useRouter();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" as="a">
        {t("change_language")}
      </Dropdown.Toggle>

      <Dropdown.Menu className="p-3 w-100 bg-dark">
        <Dropdown.Item
          onClick={() => {
            i18n.changeLanguage((i18n.language = "en"), () => router.reload());
          }}
          className="p-1 text-white"
        >
          English
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            i18n.changeLanguage((i18n.language = "bn"), () => router.reload());
          }}
          className="p-1 text-white"
        >
          {t("bangla")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
