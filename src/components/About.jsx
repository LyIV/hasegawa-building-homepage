/* modules */
import { ChatAltIcon, LocationMarkerIcon, MailIcon } from "@heroicons/react/solid";

/* stylesheets */
import "../stylesheets/about.css";

export default function About() {
  return(
    <>
      <h1 className="title">企業情報</h1>

      <table className="about">
        <tbody>
          <tr>
            <th>社名</th>
            <td>株式会社長谷川ビルディング</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>
              <span>
                <p className="font-bold">本社</p>
                <p>142-0063</p>
                <p>東京都 千代田区 丸の内 2-2-1 岸本ビルヂング 6階</p>
              </span>
              <br />
              <span>
                <p className="font-bold">出張所</p>
                <p>142-0063</p>
                <p>東京都 品川区 荏原 3-5-4</p>
              </span>
            </td>
          </tr>
          <tr>
            <th>代表者</th>
            <td>井上 創</td>
          </tr>
        </tbody>
      </table>

      <ul className="shortcuts">
        <li>
          <a href="/">
            <ChatAltIcon className="shortcut-icon" />
            <p>Message</p>
          </a>
        </li>
        <li>
          <a href="/access">
            <LocationMarkerIcon className="shortcut-icon" />
            <p>Access</p>
          </a>
        </li>
        <li>
          <a href="/contact">
            <MailIcon className="shortcut-icon" />
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </>
  );
}