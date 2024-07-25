import type { CountdownProps } from "antd";
import { Layout, Statistic } from "antd";
import { useState } from "react";
import NoteAge from "../assets/web/18+final.png";
import NoteAge_ from "../assets/web/18t_1.png";
import androi from "../assets/web/androi.png";
import appStore from "../assets/web/appStore.png";
import Asset from "../assets/web/Asset.png";
import Rectage from "../assets/web/banner-rectage.png";
import googlePlay from "../assets/web/googlePlay.png";
import qrCode from "../assets/web/qrcode.png";
import RectageDate from "../assets/web/rectangle-date.png";
import Shop from "../assets/web/txxt.png";
import viewBox from "../assets/web/viewBox.png";
import Logo from "../assets/mobile/logo.png";
import OpenBar from "../assets/mobile/bar.svg";
import peopleBg from "../assets/web/pngkey1.png";
import styles from "./homepage.module.css";
import LogoPokemon from "../assets/web/LogoPKM.png";
import Download from "../assets/web/bg_download.png";
import IconClose from "../assets/web/button_close.png";

const { Header, Content, Footer } = Layout;
const { Countdown } = Statistic;

export default function HomePage() {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  const timeFormat = "DD :" + " HH :" + " mm :" + " ss";
  const onFinish: CountdownProps["onFinish"] = () => {};
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Layout className={styles["page"]}>
      <Header className={styles["header-container"]}>
        <img src={NoteAge} className={styles["note-age"]} />
        <article className={styles["menu-header"]}>
          <ul className={styles["item-menu-header"]}>
            <li>
              <a href="#">TRANG CHỦ</a>
            </li>
            <li>
              <a href="#">GROUP</a>
            </li>
            <li>
              <a href="#">FANPAGE</a>
            </li>
          </ul>
        </article>
      </Header>
      <article className={styles["menu-header-mobile"]}>
        <ul
          className={
            menuOpen
              ? styles["item-menu-header-mobile"]
              : styles["item-menu-header-mobile-closer"]
          }
        >
          <li>
            <a href="#">TRANG CHỦ</a>
          </li>
          <li>
            {" "}
            <hr className={styles["solid"]} />
          </li>
          <li>
            <a href="#">GROUP</a>
          </li>
          <li>
            {" "}
            <hr className={styles["solid"]} />
          </li>
          <li>
            <a href="#">FANPAGE</a>
          </li>
        </ul>
      </article>
      <Header className={styles["header-container-mobile"]}>
        <img src={Logo} />
        <img
          src={OpenBar}
          className={styles["icon-menu-open"]}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      </Header>
      <div
        className={
          collapsed
            ? styles["item-open-sider-bar"]
            : styles["item-close-sider-bar"]
        }
      >
        <img className={styles["background-sider-bar"]} src={Download} />
        <div className={styles["group-sider-bar"]}>
          <img src={qrCode} />
          <img src={appStore} />
          <img src={googlePlay} />
          <img src={androi} />
        </div>
        <img
          src={collapsed ? viewBox : IconClose}
          className={
            collapsed ? styles["close-sider-bar"] : styles["open-sider-bar"]
          }
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
      </div>
      <Content className={styles["content"]}>
        <img className={styles["logo-pokemon"]} src={LogoPokemon} />
        <div className={styles["banner"]}>
          <img className={styles["banner-people"]} src={peopleBg} />
          <img className={styles["banner-rectage"]} src={Rectage} />
          <img className={styles["banner-shop"]} src={Shop} />
          <div className={styles["banner-date"]}>
            <img src={RectageDate} />
            <div>25/07/2024 - 31/07/2024</div>
          </div>
        </div>
        <div className={styles["countdown"]}>
          <div className={styles["title-countdown"]}>COMINGSOON ...</div>
          <Countdown
            className={styles["banner-countdown"]}
            value={deadline}
            onFinish={onFinish}
            format={timeFormat}
          />
          <div className={styles["banner-format-countdown"]}>
            <div>NGÀY</div>
            <div>GIỜ</div>
            <div>PHÚT</div>
            <div>GIÂY</div>
          </div>
        </div>
      </Content>
      <Footer className={styles["footer"]}>
        <img src={Asset} className={styles["footer-logo"]} />
        <div className={styles["footer-content"]}>
          <div className={styles["footer-link"]}>
            <a>Hỗ trợ</a>
            <div>|</div>
            <a>Điều khoản</a>
          </div>
          <div>© COPYRIGHT 2023 BOOM JSC. All rights reserved.</div>
          <div>
            Số 33, Khu BT4-3, Khu nhà ở Trung Văn, đường Trung Thư, Phường Trung
            Văn, Quận Nam Từ Liêm, Thành phố Hà Nội, Việt Nam
          </div>
          <div>
            Quyết định phê duyệt nội dung, kịch bản trò chơi điện tử G1 trên
            mạng số 1979/QĐ-BTTT ngày 13/10/2023
          </div>
          <div>Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe</div>
        </div>
        <img className={styles["footer-18"]} src={NoteAge_} />
      </Footer>
    </Layout>
  );
}
