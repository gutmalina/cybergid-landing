import { useEffect, useState } from "react";
import styles from "./qr-code.module.css";

const QrCode = () => {
  const [styleContainerSvg, setStyleContainerSvg] = useState(
    `${styles.container_svg}`
  );

  useEffect(() => {
    setStyleContainerSvg(
      `${styles.container_svg} ${styles.container_svg_mount}`
    );
  }, []);

  return (
    <>
      <svg
        className={styleContainerSvg}
        width="447"
        height="466"
        viewBox="0 0 447 466"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M161 7.18014V17.5643H144V7.18014L152.5 0.0751953L161 7.18014Z"
          fill="#3495CF"
        />
        <path
          d="M215 11.5524C215 13.2149 214.43 14.6324 213.29 15.8051C212.15 16.9777 210.772 17.5643 209.156 17.5643H203.844C202.228 17.5643 200.85 16.9777 199.71 15.8051C198.57 14.6324 198 13.2149 198 11.5524V6.08707C198 4.42473 198.57 3.00707 199.71 1.83442C200.85 0.661779 202.228 0.0751953 203.844 0.0751953H209.156C210.772 0.0751953 212.15 0.661604 213.29 1.83442C214.43 3.00724 215 4.42473 215 6.08707V11.5524Z"
          fill="#3495CF"
        />
        <path
          d="M249 11.5524C249 13.2149 248.43 14.6324 247.29 15.8051C246.15 16.9777 244.772 17.5643 243.156 17.5643H237.844C236.228 17.5643 234.85 16.9777 233.71 15.8051C232.57 14.6324 232 13.2149 232 11.5524V6.08707C232 4.42473 232.57 3.00707 233.71 1.83442C234.85 0.661779 236.228 0.0751953 237.844 0.0751953H243.156C244.772 0.0751953 246.15 0.661604 247.29 1.83442C248.43 3.00724 249 4.42473 249 6.08707V11.5524Z"
          fill="#3495CF"
        />
        <path d="M161 17.5645H144V35.0535H161V17.5645Z" fill="#3495CF" />
        <path
          d="M266 29.0417C266 30.7042 265.43 32.1217 264.29 33.2943C263.15 34.467 261.772 35.0535 260.156 35.0535H254.844C253.228 35.0535 251.85 34.467 250.71 33.2943C249.57 32.1217 249 30.7042 249 29.0417V23.5763C249 21.914 249.57 20.4963 250.71 19.3237C251.85 18.151 253.228 17.5645 254.844 17.5645H260.156C261.772 17.5645 263.15 18.1509 264.29 19.3237C265.43 20.4965 266 21.914 266 23.5763V29.0417Z"
          fill="#3495CF"
        />
        <path
          d="M161 37.1108H144V48.5881C144 50.2506 144.57 51.6681 145.71 52.8407C146.85 54.0133 148.228 54.5999 149.844 54.5999H161V37.1108Z"
          fill="#3495CF"
        />
        <path
          d="M178 43.1227C178 41.4604 177.43 40.0427 176.29 38.8701C175.15 37.6974 173.772 37.1108 172.156 37.1108H161V54.5999H178V43.1227Z"
          fill="#3495CF"
        />
        <path
          d="M249 44.2158V54.5999H232V44.2158L240.5 37.1108L249 44.2158Z"
          fill="#3495CF"
        />
        <path
          d="M178 66.0131V55.6289H161V66.0131L169.5 73.118L178 66.0131Z"
          fill="#3495CF"
        />
        <path
          d="M249 66.0131V55.6289H232V66.0131L240.5 73.118L249 66.0131Z"
          fill="#3495CF"
        />
        <path
          d="M274.906 55.6289H285V73.118H274.906L268 64.3735L274.906 55.6289Z"
          fill="#3495CF"
        />
        <path
          d="M296.094 55.6289H286V73.118H296.094L303 64.3735L296.094 55.6289Z"
          fill="#3495CF"
        />
        <path
          d="M161 84.5949C161 86.2574 160.43 87.6749 159.29 88.8475C158.15 90.0202 156.772 90.6068 155.156 90.6068H149.844C148.228 90.6068 146.85 90.0202 145.71 88.8475C144.57 87.6749 144 86.2574 144 84.5949V79.1295C144 77.4672 144.57 76.0495 145.71 74.8769C146.85 73.7043 148.228 73.1177 149.844 73.1177H155.156C156.772 73.1177 158.15 73.7041 159.29 74.8769C160.43 76.0497 161 77.4672 161 79.1295V84.5949Z"
          fill="#3495CF"
        />
        <path
          d="M215 79.1295V73.1177H203.844C202.228 73.1177 200.85 73.7041 199.71 74.8769C198.57 76.0497 198 77.4672 198 79.1295V90.6068H215V79.1295Z"
          fill="#3495CF"
        />
        <path
          d="M225.094 73.1177H215V90.6068H225.094L232 81.8622L225.094 73.1177Z"
          fill="#3495CF"
        />
        <path
          d="M178 105.171C178 106.833 177.43 108.251 176.29 109.423C175.15 110.596 173.772 111.182 172.156 111.182H166.844C165.228 111.182 163.85 110.596 162.71 109.423C161.57 108.251 161 106.833 161 105.171V99.7052C161 98.0429 161.57 96.6252 162.71 95.4526C163.85 94.2799 165.228 93.6934 166.844 93.6934H172.156C173.772 93.6934 175.15 94.2798 176.29 95.4526C177.43 96.6254 178 98.0429 178 99.7052V105.171Z"
          fill="#3495CF"
        />
        <path
          d="M215 104.078V93.6934H198V104.078L206.5 111.182L215 104.078Z"
          fill="#3495CF"
        />
        <path
          d="M266 100.798V111.182H249V100.798L257.5 93.6934L266 100.798Z"
          fill="#3495CF"
        />
        <path
          d="M303 100.798V111.182H286V100.798L294.5 93.6934L303 100.798Z"
          fill="#3495CF"
        />
        <path
          d="M161 123.688C161 125.351 160.43 126.768 159.29 127.941C158.15 129.113 156.772 129.7 155.156 129.7H149.844C148.228 129.7 146.85 129.113 145.71 127.941C144.57 126.768 144 125.351 144 123.688V118.223C144 116.56 144.57 115.143 145.71 113.97C146.85 112.798 148.228 112.211 149.844 112.211H155.156C156.772 112.211 158.15 112.797 159.29 113.97C160.43 115.143 161 116.56 161 118.223V123.688Z"
          fill="#3495CF"
        />
        <path
          d="M196 119.316V129.7H179V119.316L187.5 112.211L196 119.316Z"
          fill="#3495CF"
        />
        <path
          d="M232 123.688C232 125.351 231.43 126.768 230.29 127.941C229.15 129.113 227.772 129.7 226.156 129.7H220.844C219.228 129.7 217.85 129.113 216.71 127.941C215.57 126.768 215 125.351 215 123.688V118.223C215 116.56 215.57 115.143 216.71 113.97C217.85 112.798 219.228 112.211 220.844 112.211H226.156C227.772 112.211 229.15 112.797 230.29 113.97C231.43 115.143 232 116.56 232 118.223V123.688Z"
          fill="#3495CF"
        />
        <path
          d="M266 122.595V112.211H249V122.595L257.5 129.7L266 122.595Z"
          fill="#3495CF"
        />
        <path d="M303 112.211H286V129.7H303V112.211Z" fill="#3495CF" />
        <path
          d="M196 140.084V129.7H179V140.084L187.5 147.189L196 140.084Z"
          fill="#3495CF"
        />
        <path
          d="M249 141.177C249 142.84 248.43 144.257 247.29 145.43C246.15 146.603 244.772 147.189 243.156 147.189H237.844C236.228 147.189 234.85 146.603 233.71 145.43C232.57 144.257 232 142.84 232 141.177V135.712C232 134.05 232.57 132.632 233.71 131.459C234.85 130.287 236.228 129.7 237.844 129.7H243.156C244.772 129.7 246.15 130.287 247.29 131.459C248.43 132.632 249 134.05 249 135.712V141.177Z"
          fill="#3495CF"
        />
        <path d="M303 129.7H286V147.189H303V129.7Z" fill="#3495CF" />
        <path
          d="M17 156.352V166.736H0V156.352L8.5 149.247L17 156.352Z"
          fill="#3495CF"
        />
        <path
          d="M59.9062 149.247H70V166.736H59.9062L53 157.992L59.9062 149.247Z"
          fill="#3495CF"
        />
        <path d="M88 149.247H71V166.736H88V149.247Z" fill="#3495CF" />
        <path d="M108 149.247H91V166.736H108V149.247Z" fill="#3495CF" />
        <path d="M125 149.247H108V166.736H125V149.247Z" fill="#3495CF" />
        <path d="M141 149.247H124V166.736H141V149.247Z" fill="#3495CF" />
        <path d="M161 149.247H144V166.736H161V149.247Z" fill="#3495CF" />
        <path
          d="M178 155.259C178 153.597 177.43 152.179 176.29 151.006C175.15 149.834 173.772 149.247 172.156 149.247H161V166.736H178V155.259Z"
          fill="#3495CF"
        />
        <path
          d="M285 155.259V149.247H273.844C272.228 149.247 270.85 149.833 269.71 151.006C268.57 152.179 268 153.597 268 155.259V166.736H285V155.259Z"
          fill="#3495CF"
        />
        <path d="M303 149.247H286V166.736H303V149.247Z" fill="#3495CF" />
        <path
          d="M313.094 149.247H303V166.736H313.094L320 157.992L313.094 149.247Z"
          fill="#3495CF"
        />
        <path
          d="M373 156.352V166.736H356V156.352L364.5 149.247L373 156.352Z"
          fill="#3495CF"
        />
        <path
          d="M411 155.259V149.247H399.844C398.228 149.247 396.85 149.833 395.71 151.006C394.57 152.179 394 153.597 394 155.259V166.736H411V155.259Z"
          fill="#3495CF"
        />
        <path d="M428 149.247H411V166.736H428V149.247Z" fill="#3495CF" />
        <path
          d="M440.094 149.247H430V166.736H440.094L447 157.992L440.094 149.247Z"
          fill="#3495CF"
        />
        <path d="M17 167.765H0V185.254H17V167.765Z" fill="#3495CF" />
        <path
          d="M53 174.87V185.254H36V174.87L44.5 167.765L53 174.87Z"
          fill="#3495CF"
        />
        <path
          d="M88 178.149V167.765H71V178.149L79.5 185.254L88 178.149Z"
          fill="#3495CF"
        />
        <path
          d="M178 167.765H161V179.242C161 180.904 161.57 182.322 162.71 183.495C163.85 184.667 165.228 185.254 166.844 185.254H178V167.765Z"
          fill="#3495CF"
        />
        <path d="M196 167.765H179V185.254H196V167.765Z" fill="#3495CF" />
        <path d="M215 167.765H198V185.254H215V167.765Z" fill="#3495CF" />
        <path d="M232 167.765H215V185.254H232V167.765Z" fill="#3495CF" />
        <path d="M249 167.765H232V185.254H249V167.765Z" fill="#3495CF" />
        <path d="M266 167.765H249V185.254H266V167.765Z" fill="#3495CF" />
        <path d="M285 167.765H268V185.254H285V167.765Z" fill="#3495CF" />
        <path
          d="M356 173.777V167.765H344.844C343.228 167.765 341.85 168.351 340.71 169.524C339.57 170.697 339 172.114 339 173.777V185.254H356V173.777Z"
          fill="#3495CF"
        />
        <path d="M373 167.765H356V185.254H373V167.765Z" fill="#3495CF" />
        <path d="M393 167.765H376V185.254H393V167.765Z" fill="#3495CF" />
        <path d="M411 167.765H394V185.254H411V167.765Z" fill="#3495CF" />
        <path
          d="M428 167.765H411V185.254H422.156C423.772 185.254 425.15 184.667 426.29 183.495C427.43 182.322 428 180.904 428 179.242V167.765Z"
          fill="#3495CF"
        />
        <path
          d="M17 195.638V185.254H0V195.638L8.5 202.743L17 195.638Z"
          fill="#3495CF"
        />
        <path
          d="M53 185.254H36V196.731C36 198.394 36.57 199.811 37.71 200.984C38.85 202.156 40.2279 202.743 41.8438 202.743H53V185.254Z"
          fill="#3495CF"
        />
        <path
          d="M63.0938 185.254H53V202.743H63.0938L70 193.998L63.0938 185.254Z"
          fill="#3495CF"
        />
        <path
          d="M108 191.266V185.254H96.8438C95.2279 185.254 93.8499 185.84 92.71 187.013C91.5702 188.186 91 189.603 91 191.266V202.743H108V191.266Z"
          fill="#3495CF"
        />
        <path
          d="M118.094 185.254H108V202.743H118.094L125 193.998L118.094 185.254Z"
          fill="#3495CF"
        />
        <path d="M196 185.254H179V202.743H196V185.254Z" fill="#3495CF" />
        <path d="M215 185.254H198V202.743H215V185.254Z" fill="#3495CF" />
        <path d="M232 185.254H215V202.743H232V185.254Z" fill="#3495CF" />
        <path
          d="M249 185.254H232V202.743H243.156C244.772 202.743 246.15 202.156 247.29 200.984C248.43 199.811 249 198.394 249 196.731V185.254Z"
          fill="#3495CF"
        />
        <path
          d="M285 185.254H268V196.731C268 198.394 268.57 199.811 269.71 200.984C270.85 202.156 272.228 202.743 273.844 202.743H285V185.254Z"
          fill="#3495CF"
        />
        <path d="M303 185.254H286V202.743H303V185.254Z" fill="#3495CF" />
        <path
          d="M313.094 185.254H303V202.743H313.094L320 193.998L313.094 185.254Z"
          fill="#3495CF"
        />
        <path
          d="M356 195.638V185.254H339V195.638L347.5 202.743L356 195.638Z"
          fill="#3495CF"
        />
        <path d="M393 185.254H376V202.743H393V185.254Z" fill="#3495CF" />
        <path
          d="M447 192.359V202.743H430V192.359L438.5 185.254L447 192.359Z"
          fill="#3495CF"
        />
        <path d="M108 204.8H91V222.289H108V204.8Z" fill="#3495CF" />
        <path
          d="M196 204.8H179V216.278C179 217.94 179.57 219.358 180.71 220.53C181.85 221.703 183.228 222.289 184.844 222.289H196V204.8Z"
          fill="#3495CF"
        />
        <path d="M215 204.8H198V222.289H215V204.8Z" fill="#3495CF" />
        <path
          d="M232 204.8H215V222.289H226.156C227.772 222.289 229.15 221.703 230.29 220.53C231.43 219.358 232 217.94 232 216.278V204.8Z"
          fill="#3495CF"
        />
        <path
          d="M266 211.905V222.289H249V211.905L257.5 204.8L266 211.905Z"
          fill="#3495CF"
        />
        <path d="M303 204.8H286V222.289H303V204.8Z" fill="#3495CF" />
        <path
          d="M340 211.905V222.289H323V211.905L331.5 204.8L340 211.905Z"
          fill="#3495CF"
        />
        <path
          d="M362.906 204.8H373V222.289H362.906L356 213.545L362.906 204.8Z"
          fill="#3495CF"
        />
        <path d="M393 204.8H376V222.289H393V204.8Z" fill="#3495CF" />
        <path d="M411 204.8H394V222.289H411V204.8Z" fill="#3495CF" />
        <path d="M428 204.8H411V222.289H428V204.8Z" fill="#3495CF" />
        <path d="M447 204.8H430V222.289H447V204.8Z" fill="#3495CF" />
        <path
          d="M42.9062 224.347H53V241.836H42.9062L36 233.092L42.9062 224.347Z"
          fill="#3495CF"
        />
        <path d="M70 224.347H53V241.836H70V224.347Z" fill="#3495CF" />
        <path d="M88 224.347H71V241.836H88V224.347Z" fill="#3495CF" />
        <path d="M108 224.347H91V241.836H108V224.347Z" fill="#3495CF" />
        <path
          d="M118.094 224.347H108V241.836H118.094L125 233.092L118.094 224.347Z"
          fill="#3495CF"
        />
        <path
          d="M161 230.359V224.347H149.844C148.228 224.347 146.85 224.934 145.71 226.106C144.57 227.279 144 228.697 144 230.359V241.836H161V230.359Z"
          fill="#3495CF"
        />
        <path
          d="M171.094 224.347H161V241.836H171.094L178 233.092L171.094 224.347Z"
          fill="#3495CF"
        />
        <path
          d="M238.906 224.347H249V241.836H238.906L232 233.092L238.906 224.347Z"
          fill="#3495CF"
        />
        <path d="M266 224.347H249V241.836H266V224.347Z" fill="#3495CF" />
        <path d="M303 224.347H286V241.836H303V224.347Z" fill="#3495CF" />
        <path
          d="M340 224.347H323V235.824C323 237.487 323.57 238.904 324.71 240.077C325.85 241.25 327.228 241.836 328.844 241.836H340V224.347Z"
          fill="#3495CF"
        />
        <path
          d="M349.094 224.347H339V241.836H349.094L356 233.092L349.094 224.347Z"
          fill="#3495CF"
        />
        <path
          d="M447 234.731V224.347H430V234.731L438.5 241.836L447 234.731Z"
          fill="#3495CF"
        />
        <path
          d="M17 246.819V240.807H5.84375C4.2279 240.807 2.84988 241.394 1.71003 242.566C0.57018 243.739 0 245.157 0 246.819V258.296H17V246.819Z"
          fill="#3495CF"
        />
        <path
          d="M34 246.819C34 245.157 33.4298 243.739 32.29 242.566C31.1501 241.394 29.7723 240.807 28.1562 240.807H17V258.296H34V246.819Z"
          fill="#3495CF"
        />
        <path d="M70 240.807H53V258.296H70V240.807Z" fill="#3495CF" />
        <path
          d="M108 251.191V240.807H91V251.191L99.5 258.296L108 251.191Z"
          fill="#3495CF"
        />
        <path d="M161 240.807H144V258.296H161V240.807Z" fill="#3495CF" />
        <path
          d="M196 247.912V258.296H179V247.912L187.5 240.807L196 247.912Z"
          fill="#3495CF"
        />
        <path
          d="M232 252.284C232 253.947 231.43 255.364 230.29 256.537C229.15 257.71 227.772 258.296 226.156 258.296H220.844C219.228 258.296 217.85 257.71 216.71 256.537C215.57 255.364 215 253.947 215 252.284V246.819C215 245.157 215.57 243.739 216.71 242.566C217.85 241.394 219.228 240.807 220.844 240.807H226.156C227.772 240.807 229.15 241.394 230.29 242.566C231.43 243.739 232 245.157 232 246.819V252.284Z"
          fill="#3495CF"
        />
        <path d="M266 240.807H249V258.296H266V240.807Z" fill="#3495CF" />
        <path d="M285 240.807H268V258.296H285V240.807Z" fill="#3495CF" />
        <path
          d="M303 240.807H286V258.296H297.156C298.772 258.296 300.15 257.71 301.29 256.537C302.43 255.364 303 253.947 303 252.284V240.807Z"
          fill="#3495CF"
        />
        <path
          d="M373 247.912V258.296H356V247.912L364.5 240.807L373 247.912Z"
          fill="#3495CF"
        />
        <path
          d="M428 247.912V258.296H411V247.912L419.5 240.807L428 247.912Z"
          fill="#3495CF"
        />
        <path d="M17 260.354H0V277.843H17V260.354Z" fill="#3495CF" />
        <path d="M34 260.354H17V277.843H34V260.354Z" fill="#3495CF" />
        <path d="M53 260.354H36V277.843H53V260.354Z" fill="#3495CF" />
        <path
          d="M70 260.354H53V277.843H64.1562C65.7723 277.843 67.1501 277.257 68.29 276.084C69.4298 274.911 70 273.494 70 271.831V260.354Z"
          fill="#3495CF"
        />
        <path
          d="M114.906 260.354H125V277.843H114.906L108 269.099L114.906 260.354Z"
          fill="#3495CF"
        />
        <path d="M141 260.354H124V277.843H141V260.354Z" fill="#3495CF" />
        <path d="M161 260.354H144V277.843H161V260.354Z" fill="#3495CF" />
        <path d="M196 260.354H179V277.843H196V260.354Z" fill="#3495CF" />
        <path d="M266 260.354H249V277.843H266V260.354Z" fill="#3495CF" />
        <path d="M285 260.354H268V277.843H285V260.354Z" fill="#3495CF" />
        <path
          d="M340 271.831C340 273.494 339.43 274.911 338.29 276.084C337.15 277.257 335.772 277.843 334.156 277.843H328.844C327.228 277.843 325.85 277.257 324.71 276.084C323.57 274.911 323 273.494 323 271.831V266.366C323 264.704 323.57 263.286 324.71 262.113C325.85 260.941 327.228 260.354 328.844 260.354H334.156C335.772 260.354 337.15 260.94 338.29 262.113C339.43 263.286 340 264.704 340 266.366V271.831Z"
          fill="#3495CF"
        />
        <path
          d="M373 260.354H356V271.831C356 273.494 356.57 274.911 357.71 276.084C358.85 277.257 360.228 277.843 361.844 277.843H373V260.354Z"
          fill="#3495CF"
        />
        <path d="M393 260.354H376V277.843H393V260.354Z" fill="#3495CF" />
        <path d="M411 260.354H394V277.843H411V260.354Z" fill="#3495CF" />
        <path d="M428 260.354H411V277.843H428V260.354Z" fill="#3495CF" />
        <path
          d="M447 266.366C447 264.704 446.43 263.286 445.29 262.113C444.15 260.941 442.772 260.354 441.156 260.354H430V277.843H447V266.366Z"
          fill="#3495CF"
        />
        <path d="M17 279.9H0V297.389H17V279.9Z" fill="#3495CF" />
        <path
          d="M88 287.005V297.389H71V287.005L79.5 279.9L88 287.005Z"
          fill="#3495CF"
        />
        <path
          d="M161 279.9H144V291.378C144 293.04 144.57 294.458 145.71 295.63C146.85 296.803 148.228 297.389 149.844 297.389H161V279.9Z"
          fill="#3495CF"
        />
        <path d="M178 279.9H161V297.389H178V279.9Z" fill="#3495CF" />
        <path
          d="M196 279.9H179V297.389H190.156C191.772 297.389 193.15 296.803 194.29 295.63C195.43 294.458 196 293.04 196 291.378V279.9Z"
          fill="#3495CF"
        />
        <path
          d="M232 285.912V279.9H220.844C219.228 279.9 217.85 280.487 216.71 281.66C215.57 282.832 215 284.25 215 285.912V297.389H232V285.912Z"
          fill="#3495CF"
        />
        <path d="M249 279.9H232V297.389H249V279.9Z" fill="#3495CF" />
        <path d="M266 279.9H249V297.389H266V279.9Z" fill="#3495CF" />
        <path d="M285 279.9H268V297.389H285V279.9Z" fill="#3495CF" />
        <path
          d="M356 287.005V297.389H339V287.005L347.5 279.9L356 287.005Z"
          fill="#3495CF"
        />
        <path
          d="M393 279.9H376V291.378C376 293.04 376.57 294.458 377.71 295.63C378.85 296.803 380.228 297.389 381.844 297.389H393V279.9Z"
          fill="#3495CF"
        />
        <path d="M411 279.9H394V297.389H411V279.9Z" fill="#3495CF" />
        <path
          d="M447 290.285V279.9H430V290.285L438.5 297.389L447 290.285Z"
          fill="#3495CF"
        />
        <path
          d="M17 307.774V297.39H0V307.774L8.5 314.879L17 307.774Z"
          fill="#3495CF"
        />
        <path
          d="M59.9062 297.39H70V314.879H59.9062L53 306.134L59.9062 297.39Z"
          fill="#3495CF"
        />
        <path
          d="M88 297.39H71V314.879H82.1562C83.7723 314.879 85.1501 314.292 86.29 313.12C87.4298 311.947 88 310.529 88 308.867V297.39Z"
          fill="#3495CF"
        />
        <path
          d="M125 308.867C125 310.529 124.43 311.947 123.29 313.12C122.15 314.292 120.772 314.879 119.156 314.879H113.844C112.228 314.879 110.85 314.292 109.71 313.12C108.57 311.947 108 310.529 108 308.867V303.402C108 301.739 108.57 300.322 109.71 299.149C110.85 297.976 112.228 297.39 113.844 297.39H119.156C120.772 297.39 122.15 297.976 123.29 299.149C124.43 300.322 125 301.739 125 303.402V308.867Z"
          fill="#3495CF"
        />
        <path
          d="M178 307.774V297.39H161V307.774L169.5 314.879L178 307.774Z"
          fill="#3495CF"
        />
        <path
          d="M215 303.402V297.39H203.844C202.228 297.39 200.85 297.976 199.71 299.149C198.57 300.322 198 301.739 198 303.402V314.879H215V303.402Z"
          fill="#3495CF"
        />
        <path
          d="M232 297.39H215V314.879H226.156C227.772 314.879 229.15 314.292 230.29 313.12C231.43 311.947 232 310.529 232 308.867V297.39Z"
          fill="#3495CF"
        />
        <path
          d="M285 297.39H268V308.867C268 310.529 268.57 311.947 269.71 313.12C270.85 314.292 272.228 314.879 273.844 314.879H285V297.39Z"
          fill="#3495CF"
        />
        <path d="M303 297.39H286V314.879H303V297.39Z" fill="#3495CF" />
        <path d="M320 297.39H303V314.879H320V297.39Z" fill="#3495CF" />
        <path d="M340 297.39H323V314.879H340V297.39Z" fill="#3495CF" />
        <path d="M356 297.39H339V314.879H356V297.39Z" fill="#3495CF" />
        <path
          d="M373 303.402C373 301.739 372.43 300.322 371.29 299.149C370.15 297.976 368.772 297.39 367.156 297.39H356V314.879H373V303.402Z"
          fill="#3495CF"
        />
        <path d="M411 297.39H394V314.879H411V297.39Z" fill="#3495CF" />
        <path
          d="M428 303.402C428 301.739 427.43 300.322 426.29 299.149C425.15 297.976 423.772 297.39 422.156 297.39H411V314.879H428V303.402Z"
          fill="#3495CF"
        />
        <path
          d="M161 323.013V333.397H144V323.013L152.5 315.908L161 323.013Z"
          fill="#3495CF"
        />
        <path
          d="M215 326.292V315.908H198V326.292L206.5 333.397L215 326.292Z"
          fill="#3495CF"
        />
        <path d="M303 315.908H286V333.397H303V315.908Z" fill="#3495CF" />
        <path d="M373 315.908H356V333.397H373V315.908Z" fill="#3495CF" />
        <path
          d="M411 315.908H394V327.385C394 329.047 394.57 330.465 395.71 331.638C396.85 332.81 398.228 333.397 399.844 333.397H411V315.908Z"
          fill="#3495CF"
        />
        <path
          d="M428 315.908H411V333.397H422.156C423.772 333.397 425.15 332.81 426.29 331.638C427.43 330.465 428 329.047 428 327.385V315.908Z"
          fill="#3495CF"
        />
        <path d="M161 335.454H144V352.943H161V335.454Z" fill="#3495CF" />
        <path
          d="M221.906 335.454H232V352.943H221.906L215 344.199L221.906 335.454Z"
          fill="#3495CF"
        />
        <path d="M249 335.454H232V352.943H249V335.454Z" fill="#3495CF" />
        <path
          d="M259.094 335.454H249V352.943H259.094L266 344.199L259.094 335.454Z"
          fill="#3495CF"
        />
        <path d="M303 335.454H286V352.943H303V335.454Z" fill="#3495CF" />
        <path
          d="M340 346.931C340 348.594 339.43 350.011 338.29 351.184C337.15 352.357 335.772 352.943 334.156 352.943H328.844C327.228 352.943 325.85 352.357 324.71 351.184C323.57 350.011 323 348.594 323 346.931V341.466C323 339.804 323.57 338.386 324.71 337.213C325.85 336.041 327.228 335.454 328.844 335.454H334.156C335.772 335.454 337.15 336.041 338.29 337.213C339.43 338.386 340 339.804 340 341.466V346.931Z"
          fill="#3495CF"
        />
        <path d="M373 335.454H356V352.943H373V335.454Z" fill="#3495CF" />
        <path
          d="M447 342.559V352.943H430V342.559L438.5 335.454L447 342.559Z"
          fill="#3495CF"
        />
        <path d="M161 352.943H144V370.432H161V352.943Z" fill="#3495CF" />
        <path
          d="M196 358.955V352.943H184.844C183.228 352.943 181.85 353.53 180.71 354.703C179.57 355.875 179 357.293 179 358.955V370.432H196V358.955Z"
          fill="#3495CF"
        />
        <path
          d="M215 358.955C215 357.293 214.43 355.875 213.29 354.703C212.15 353.53 210.772 352.943 209.156 352.943H198V370.432H215V358.955Z"
          fill="#3495CF"
        />
        <path d="M249 352.943H232V370.432H249V352.943Z" fill="#3495CF" />
        <path
          d="M285 358.955V352.943H273.844C272.228 352.943 270.85 353.53 269.71 354.703C268.57 355.875 268 357.293 268 358.955V370.432H285V358.955Z"
          fill="#3495CF"
        />
        <path d="M303 352.943H286V370.432H303V352.943Z" fill="#3495CF" />
        <path d="M373 352.943H356V370.432H373V352.943Z" fill="#3495CF" />
        <path d="M447 352.943H430V370.432H447V352.943Z" fill="#3495CF" />
        <path d="M161 371.461H144V388.95H161V371.461Z" fill="#3495CF" />
        <path
          d="M196 371.461H179V382.938C179 384.601 179.57 386.018 180.71 387.191C181.85 388.363 183.228 388.95 184.844 388.95H196V371.461Z"
          fill="#3495CF"
        />
        <path
          d="M215 371.461H198V388.95H209.156C210.772 388.95 212.15 388.363 213.29 387.191C214.43 386.018 215 384.601 215 382.938V371.461Z"
          fill="#3495CF"
        />
        <path d="M249 371.461H232V388.95H249V371.461Z" fill="#3495CF" />
        <path
          d="M285 371.461H268V382.938C268 384.601 268.57 386.018 269.71 387.191C270.85 388.363 272.228 388.95 273.844 388.95H285V371.461Z"
          fill="#3495CF"
        />
        <path d="M303 371.461H286V388.95H303V371.461Z" fill="#3495CF" />
        <path d="M320 371.461H303V388.95H320V371.461Z" fill="#3495CF" />
        <path d="M340 371.461H323V388.95H340V371.461Z" fill="#3495CF" />
        <path d="M356 371.461H339V388.95H356V371.461Z" fill="#3495CF" />
        <path
          d="M373 371.461H356V388.95H367.156C368.772 388.95 370.15 388.363 371.29 387.191C372.43 386.018 373 384.601 373 382.938V371.461Z"
          fill="#3495CF"
        />
        <path
          d="M428 377.473V371.461H416.844C415.228 371.461 413.85 372.047 412.71 373.22C411.57 374.393 411 375.81 411 377.473V388.95H428V377.473Z"
          fill="#3495CF"
        />
        <path d="M447 371.461H430V388.95H447V371.461Z" fill="#3495CF" />
        <path
          d="M161 402.421V392.037H144V402.421L152.5 409.526L161 402.421Z"
          fill="#3495CF"
        />
        <path
          d="M221.906 392.037H232V409.526H221.906L215 400.781L221.906 392.037Z"
          fill="#3495CF"
        />
        <path d="M249 392.037H232V409.526H249V392.037Z" fill="#3495CF" />
        <path d="M320 392.037H303V409.526H320V392.037Z" fill="#3495CF" />
        <path
          d="M340 392.037H323V409.526H334.156C335.772 409.526 337.15 408.939 338.29 407.766C339.43 406.594 340 405.176 340 403.514V392.037Z"
          fill="#3495CF"
        />
        <path d="M428 392.037H411V409.526H428V392.037Z" fill="#3495CF" />
        <path d="M447 392.037H430V409.526H447V392.037Z" fill="#3495CF" />
        <path
          d="M178 416.63V427.014H161V416.63L169.5 409.525L178 416.63Z"
          fill="#3495CF"
        />
        <path
          d="M215 416.63V427.014H198V416.63L206.5 409.525L215 416.63Z"
          fill="#3495CF"
        />
        <path d="M249 409.525H232V427.014H249V409.525Z" fill="#3495CF" />
        <path
          d="M285 416.63V427.014H268V416.63L276.5 409.525L285 416.63Z"
          fill="#3495CF"
        />
        <path
          d="M320 419.91V409.525H303V419.91L311.5 427.014L320 419.91Z"
          fill="#3495CF"
        />
        <path
          d="M373 415.537V409.525H361.844C360.228 409.525 358.85 410.112 357.71 411.285C356.57 412.457 356 413.875 356 415.537V427.014H373V415.537Z"
          fill="#3495CF"
        />
        <path d="M393 409.525H376V427.014H393V409.525Z" fill="#3495CF" />
        <path d="M411 409.525H394V427.014H411V409.525Z" fill="#3495CF" />
        <path d="M428 409.525H411V427.014H428V409.525Z" fill="#3495CF" />
        <path d="M447 409.525H430V427.014H447V409.525Z" fill="#3495CF" />
        <path
          d="M178 428.043H161V439.521C161 441.183 161.57 442.601 162.71 443.773C163.85 444.946 165.228 445.533 166.844 445.533H178V428.043Z"
          fill="#3495CF"
        />
        <path d="M196 428.043H179V445.533H196V428.043Z" fill="#3495CF" />
        <path d="M215 428.043H198V445.533H215V428.043Z" fill="#3495CF" />
        <path d="M232 428.043H215V445.533H232V428.043Z" fill="#3495CF" />
        <path d="M249 428.043H232V445.533H249V428.043Z" fill="#3495CF" />
        <path
          d="M285 438.428V428.043H268V438.428L276.5 445.533L285 438.428Z"
          fill="#3495CF"
        />
        <path
          d="M340 434.055V428.043H328.844C327.228 428.043 325.85 428.63 324.71 429.803C323.57 430.976 323 432.393 323 434.055V445.533H340V434.055Z"
          fill="#3495CF"
        />
        <path d="M356 428.043H339V445.533H356V428.043Z" fill="#3495CF" />
        <path
          d="M373 428.043H356V445.533H367.156C368.772 445.533 370.15 444.946 371.29 443.773C372.43 442.601 373 441.183 373 439.521V428.043Z"
          fill="#3495CF"
        />
        <path
          d="M411 428.043H394V439.521C394 441.183 394.57 442.601 395.71 443.773C396.85 444.946 398.228 445.533 399.844 445.533H411V428.043Z"
          fill="#3495CF"
        />
        <path d="M428 428.043H411V445.533H428V428.043Z" fill="#3495CF" />
        <path d="M447 428.043H430V445.533H447V428.043Z" fill="#3495CF" />
        <path
          d="M161 459.067C161 460.73 160.43 462.147 159.29 463.32C158.15 464.492 156.772 465.079 155.156 465.079H149.844C148.228 465.079 146.85 464.492 145.71 463.32C144.57 462.147 144 460.73 144 459.067V453.602C144 451.939 144.57 450.522 145.71 449.349C146.85 448.176 148.228 447.59 149.844 447.59H155.156C156.772 447.59 158.15 448.176 159.29 449.349C160.43 450.522 161 451.939 161 453.602V459.067Z"
          fill="#3495CF"
        />
        <path
          d="M196 447.59H179V459.067C179 460.73 179.57 462.147 180.71 463.32C181.85 464.492 183.228 465.079 184.844 465.079H196V447.59Z"
          fill="#3495CF"
        />
        <path d="M215 447.59H198V465.079H215V447.59Z" fill="#3495CF" />
        <path d="M232 447.59H215V465.079H232V447.59Z" fill="#3495CF" />
        <path
          d="M249 447.59H232V465.079H243.156C244.772 465.079 246.15 464.492 247.29 463.32C248.43 462.147 249 460.73 249 459.067V447.59Z"
          fill="#3495CF"
        />
        <path
          d="M303 459.067C303 460.73 302.43 462.147 301.29 463.32C300.15 464.492 298.772 465.079 297.156 465.079H291.844C290.228 465.079 288.85 464.492 287.71 463.32C286.57 462.147 286 460.73 286 459.067V453.602C286 451.939 286.57 450.522 287.71 449.349C288.85 448.176 290.228 447.59 291.844 447.59H297.156C298.772 447.59 300.15 448.176 301.29 449.349C302.43 450.522 303 451.939 303 453.602V459.067Z"
          fill="#3495CF"
        />
        <path
          d="M340 457.974V447.59H323V457.974L331.5 465.079L340 457.974Z"
          fill="#3495CF"
        />
        <path
          d="M393 459.067C393 460.73 392.43 462.147 391.29 463.32C390.15 464.492 388.772 465.079 387.156 465.079H381.844C380.228 465.079 378.85 464.492 377.71 463.32C376.57 462.147 376 460.73 376 459.067V453.602C376 451.939 376.57 450.522 377.71 449.349C378.85 448.176 380.228 447.59 381.844 447.59H387.156C388.772 447.59 390.15 448.176 391.29 449.349C392.43 450.522 393 451.939 393 453.602V459.067Z"
          fill="#3495CF"
        />
        <path
          d="M447 457.974V447.59H430V457.974L438.5 465.079L447 457.974Z"
          fill="#3495CF"
        />
        <path
          d="M81.6652 0.0751953H42.3348C23.1669 0.0751953 6.92788 13.3159 1.736 31.4132C1.19908 33.2853 0.77996 35.2092 0.48856 37.1759C0.1674 39.3462 0 41.5683 0 43.8306V85.9279C0 110.067 18.9968 129.696 42.3348 129.696L62 129.7L81.6652 129.695C105.002 129.695 124 110.065 124 85.9266V43.8306C124 19.7036 105.003 0.0751953 81.6652 0.0751953ZM105.4 85.9279C105.4 99.3385 94.7534 110.249 81.6602 110.249L62 110.253L42.3398 110.248C29.2466 110.248 18.6 99.3372 18.6 85.9279V43.8306C18.6 39.6418 19.6391 35.698 21.4681 32.252C23.2289 28.9369 25.7201 26.086 28.7196 23.9274C32.576 21.1517 37.2719 19.5221 42.3336 19.5221H81.6652C94.7534 19.5221 105.4 30.4266 105.4 43.8306V85.9279Z"
          fill="#3495CF"
        />
        <path
          d="M404.665 0.0751953H365.335C346.167 0.0751953 329.928 13.3159 324.736 31.4132C324.199 33.2853 323.78 35.2092 323.489 37.1759C323.167 39.3462 323 41.5683 323 43.8306V85.9279C323 110.067 341.997 129.696 365.335 129.696L385 129.7L404.665 129.695C428.002 129.695 447 110.065 447 85.9266V43.8306C447 19.7036 428.003 0.0751953 404.665 0.0751953ZM428.4 85.9279C428.4 99.3385 417.753 110.249 404.66 110.249L385 110.253L365.34 110.248C352.247 110.248 341.6 99.3372 341.6 85.9279V43.8306C341.6 39.6418 342.639 35.698 344.468 32.252C346.229 28.9369 348.72 26.086 351.72 23.9274C355.576 21.1517 360.272 19.5221 365.334 19.5221H404.665C417.753 19.5221 428.4 30.4266 428.4 43.8306V85.9279Z"
          fill="#3495CF"
        />
        <path
          d="M81.6652 335.454H42.3348C23.1669 335.454 6.92788 348.695 1.736 366.792C1.19908 368.664 0.77996 370.588 0.48856 372.555C0.1674 374.725 0 376.947 0 379.21V421.307C0 445.446 18.9968 465.075 42.3348 465.075L62 465.079L81.6652 465.074C105.002 465.074 124 445.444 124 421.306V379.21C124 355.082 105.003 335.454 81.6652 335.454ZM105.4 421.307C105.4 434.717 94.7534 445.628 81.6602 445.628L62 445.632L42.3398 445.627C29.2466 445.627 18.6 434.716 18.6 421.307V379.21C18.6 375.021 19.6391 371.077 21.4681 367.631C23.2289 364.316 25.7201 361.465 28.7196 359.306C32.576 356.531 37.2719 354.901 42.3336 354.901H81.6652C94.7534 354.901 105.4 365.805 105.4 379.21V421.307Z"
          fill="#3495CF"
        />
        <path
          d="M50.4994 92.6644C42.5039 92.6644 36 85.9802 36 77.7716V51.9959C36 49.4315 36.6358 47.0183 37.749 44.9067C38.8241 42.8745 40.3458 41.1279 42.1786 39.8102C44.5327 38.1114 47.4024 37.1108 50.4914 37.1108H74.508C82.4961 37.1108 89 43.7873 89 51.9953V77.7711C89 85.9791 82.4966 92.6639 74.508 92.6639H62.5L50.4994 92.6644Z"
          fill="#3495CF"
        />
        <path
          d="M370.499 92.6644C362.504 92.6644 356 85.9802 356 77.7716V51.9959C356 49.4315 356.636 47.0183 357.749 44.9067C358.824 42.8745 360.346 41.1279 362.179 39.8102C364.533 38.1114 367.402 37.1108 370.491 37.1108H394.508C402.496 37.1108 409 43.7873 409 51.9953V77.7711C409 85.9791 402.497 92.6639 394.508 92.6639H382.5L370.499 92.6644Z"
          fill="#3495CF"
        />
        <path
          d="M50.4994 427.015C42.5039 427.015 36 420.33 36 412.122V386.346C36 383.782 36.6358 381.368 37.749 379.257C38.8241 377.225 40.3458 375.478 42.1786 374.16C44.5327 372.461 47.4024 371.461 50.4914 371.461H74.508C82.4961 371.461 89 378.137 89 386.345V412.121C89 420.329 82.4966 427.014 74.508 427.014H62.5L50.4994 427.015Z"
          fill="#3495CF"
        />
      </svg>
    </>
  );
};

export default QrCode;