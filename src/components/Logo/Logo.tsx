import * as S from './Logo.styles';

export type LogoProps = {
  id?: string;
  hideText?: boolean;
  size?: 'small' | 'normal' | 'large';
};

export const Logo = ({
  id = 'logo',
  hideText = false,
  size = 'normal',
}: LogoProps) => {
  return (
    <S.Wrapper hideText={hideText} size={size}>
      <svg
        width="252"
        height="81"
        viewBox="0 0 252 81"
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="logo"
      >
        <g filter={`url(#filter0_${id})`}>
          <g clipPath="url(#clip0)">
            <path
              d="M47.5538 62.5833C47.5538 63.1939 47.0416 63.6875 46.4079 63.6875C45.7754 63.6875 45.2621 63.1939 45.2621 62.5833C45.2621 61.9727 45.7754 61.4792 46.4079 61.4792C47.0416 61.4792 47.5538 61.9727 47.5538 62.5833ZM45.5978 52.3223L50.1811 56.739L51.8014 55.1777L47.218 50.761L45.5978 52.3223ZM44.9264 52.9694L43.3061 54.5306L47.8895 58.9473L49.5097 57.386L44.9264 52.9694ZM42.6347 56.2819L39.8686 58.9473L43.3061 62.2598L46.0722 59.5944L42.6347 56.2819ZM49.8454 59.2708C49.2129 59.2708 48.6996 59.7644 48.6996 60.375C48.6996 60.9856 49.2129 61.4792 49.8454 61.4792C50.4791 61.4792 50.9913 60.9856 50.9913 60.375C50.9913 59.7644 50.4791 59.2708 49.8454 59.2708ZM89.6173 19.841C89.8235 20.0398 89.9496 20.3158 89.9496 20.625C89.9496 21.2323 89.434 21.7292 88.8037 21.7292C88.4829 21.7292 88.1965 21.5967 87.9902 21.3979L87.0735 20.3556C86.7516 20.9883 86.5132 21.7844 86.5132 22.8333V23.5312L85.859 23.8304C85.8555 23.8326 85.8085 23.8536 85.7295 23.89L86.1809 24.2577C86.3872 24.4565 86.5132 24.7325 86.5132 25.0417C86.5132 25.649 85.9976 26.1458 85.3674 26.1458C85.0466 26.1458 84.7601 26.0133 84.5539 25.8146L83.7013 24.8407C82.9428 25.2018 82.127 25.5993 81.4887 25.9305L56.0283 51.4854C56.6345 51.8034 57.7849 52.0805 59.8818 51.5748L60.5853 51.4047L61.1273 51.9767C61.6143 52.5487 61.5295 53.538 61.1949 54.2215C60.6117 55.414 58.964 56.2807 55.853 57.0294C55.2939 57.1652 54.8665 58.5531 54.4883 59.7776C53.6015 62.6529 52.2608 67 46.4079 67C44.5746 67 42.496 67 38.7228 63.364C34.9496 59.728 34.9496 56.0599 34.9496 54.8542C34.9496 50.1261 38.8145 49.2052 41.6355 48.5328C43.6923 48.0437 44.9688 47.6782 45.3343 46.7374C47.9124 40.1146 50.6269 37.2637 54.4093 37.2052C55.4256 37.1776 55.8358 37.6358 56.0169 38.0123C56.4282 38.8691 55.7384 39.6266 55.4061 39.991L55.3225 40.0848C52.5553 43.4183 52.2173 44.5633 52.4785 45.365L77.6823 22.0516C77.806 21.9334 77.9401 21.7535 78.073 21.5547L76.5433 20.3048C76.3371 20.106 76.1996 19.83 76.1996 19.5208C76.1996 18.9135 76.7152 18.4167 77.3454 18.4167C77.6662 18.4167 77.9527 18.5381 78.159 18.7369L79.0344 19.7339C79.3025 19.1289 79.5385 18.5271 79.6978 18.0666L79.8514 17.6228L80.4266 17.3578L79.9808 16.9923C79.7746 16.7935 79.6371 16.5175 79.6371 16.2083C79.6371 15.601 80.1527 15.1042 80.7829 15.1042C81.1037 15.1042 81.3902 15.2256 81.5965 15.4244L82.4673 16.4159L87.7083 14H87.9684C88.5941 14 89.1429 14.2473 89.5165 14.6956C90.2945 15.6331 90.0241 17.1204 89.9232 17.5554L89.7811 18.1638L89.1681 18.3604C89.1337 18.3736 88.7854 18.505 88.358 18.8153L89.6173 19.841ZM54.4219 53.0974L53.3001 54.2237L48.2092 49.3179L50.7403 46.9759C49.6564 45.1231 49.7079 43.5751 52.6435 39.8121C51.2743 40.4912 49.4891 42.3572 47.4816 47.5137C46.6657 49.6116 44.2858 50.1791 42.1855 50.6793C39.1204 51.407 37.2413 51.9999 37.2413 54.8542C37.2413 55.8336 37.2413 58.8137 40.343 61.8027C43.4448 64.7917 44.884 64.7917 46.4079 64.7917C50.2625 64.7917 51.2399 62.5579 52.2906 59.1494C52.8956 57.1851 53.4685 55.3279 55.2961 54.8884C56.5348 54.5892 57.3747 54.3043 57.9442 54.0559C56.2426 54.0669 55.1231 53.5899 54.4219 53.0974ZM79.1799 25.0582L78.4764 24.3792L51.4828 49.3499L53.2669 51.0691L79.1799 25.0582ZM87.7553 16.4259L81.7087 19.2139C81.4154 19.9978 80.7772 21.5812 80.0118 22.734L80.996 23.6813C82.1155 23.1215 83.4699 22.4855 84.2491 22.1234C84.5092 18.7104 86.6267 17.1568 87.753 16.5661C87.7542 16.5197 87.7553 16.4722 87.7553 16.4259Z"
              fill="#5200FF"
            />
          </g>
          <path
            className="text"
            d="M91.6 53V42.06L91.2 40.06L91.62 38.86H95.44L99.36 46.46H99.76L103 38.86H106.98L107.18 40.06L106.98 41.98V53H103.36L103.42 51.3V45.72H103.2L102.4 47.64L100.6 51H98.2L95.44 45.72H95.24V47.34L95.44 53H91.6ZM112.179 53.2C111.379 53.2 110.759 53.0467 110.319 52.74C109.892 52.4333 109.592 51.9933 109.419 51.42C109.259 50.8333 109.179 50.1333 109.179 49.32V43.54H112.779V48.8C112.779 49.2933 112.872 49.68 113.059 49.96C113.259 50.24 113.552 50.38 113.939 50.38C114.299 50.38 114.626 50.2267 114.919 49.92C115.226 49.6133 115.379 49.1667 115.379 48.58V43.54H118.979V49.78L119.399 51.78L118.979 53H115.599V52.02L115.399 51.92C115.226 52.0933 114.972 52.28 114.639 52.48C114.319 52.68 113.946 52.8533 113.519 53C113.106 53.1333 112.659 53.2 112.179 53.2ZM125.217 53.2C124.244 53.2 123.384 53.1 122.637 52.9C121.891 52.7 121.311 52.4933 120.897 52.28V49.5C121.444 49.74 122.004 49.9267 122.577 50.06C123.164 50.1933 123.691 50.2867 124.157 50.34C124.624 50.38 124.957 50.4 125.157 50.4C125.384 50.4 125.544 50.3667 125.637 50.3C125.731 50.22 125.777 50.1267 125.777 50.02C125.777 49.8733 125.657 49.7533 125.417 49.66C125.177 49.5533 124.724 49.42 124.057 49.26C123.511 49.1267 122.977 48.96 122.457 48.76C121.951 48.5467 121.531 48.2533 121.197 47.88C120.877 47.5067 120.717 47.0067 120.717 46.38C120.717 45.6067 120.897 45 121.257 44.56C121.617 44.12 122.131 43.8133 122.797 43.64C123.464 43.4533 124.244 43.36 125.137 43.36C125.644 43.36 126.117 43.3867 126.557 43.44C126.997 43.4933 127.311 43.5333 127.497 43.56L129.357 44.76L128.457 46.9L124.957 46.14C124.531 46.14 124.317 46.28 124.317 46.56C124.317 46.8533 124.624 47.0733 125.237 47.22C125.717 47.3267 126.211 47.4467 126.717 47.58C127.224 47.7 127.684 47.86 128.097 48.06C128.524 48.26 128.864 48.5267 129.117 48.86C129.384 49.1933 129.517 49.6333 129.517 50.18C129.517 51.1933 129.151 51.9533 128.417 52.46C127.697 52.9533 126.631 53.2 125.217 53.2ZM133.117 42.98L130.577 40.42L133.117 37.88L135.657 40.42L133.117 42.98ZM131.317 53V46.38L130.897 44.78L131.297 43.56H134.917V53H131.317ZM141.357 53.2C140.437 53.2 139.604 53.0467 138.857 52.74C138.124 52.4333 137.537 51.92 137.097 51.2C136.67 50.48 136.457 49.5067 136.457 48.28C136.457 47.04 136.69 46.0667 137.157 45.36C137.624 44.64 138.23 44.1267 138.977 43.82C139.724 43.5133 140.517 43.36 141.357 43.36C142.09 43.36 142.717 43.3867 143.237 43.44C143.77 43.4933 144.124 43.54 144.297 43.58L145.857 45.34L144.257 47.52L141.957 46.16C140.81 46.16 140.237 46.8667 140.237 48.28C140.237 49.0133 140.41 49.5533 140.757 49.9C141.104 50.2333 141.637 50.4 142.357 50.4C143.077 50.4 143.724 50.3 144.297 50.1C144.87 49.9 145.317 49.7133 145.637 49.54V52.42C145.224 52.6333 144.677 52.82 143.997 52.98C143.33 53.1267 142.45 53.2 141.357 53.2ZM150.46 53.2C149.887 53.2 149.353 53.12 148.86 52.96C148.38 52.7867 147.993 52.4933 147.7 52.08C147.407 51.6667 147.26 51.0933 147.26 50.36C147.26 49.6933 147.427 49.14 147.76 48.7C148.093 48.26 148.547 47.9333 149.12 47.72C149.693 47.5067 150.34 47.4 151.06 47.4C151.753 47.4 152.273 47.48 152.62 47.64C152.967 47.7867 153.267 47.94 153.52 48.1L153.66 47.98C153.66 47.58 153.627 47.2467 153.56 46.98C153.493 46.7133 153.34 46.5133 153.1 46.38C152.86 46.2333 152.487 46.16 151.98 46.16C151.487 46.16 150.96 46.2067 150.4 46.3C149.853 46.38 149.347 46.4867 148.88 46.62C148.427 46.74 148.087 46.86 147.86 46.98V43.98C148.273 43.8333 148.86 43.7 149.62 43.58C150.393 43.4467 151.34 43.38 152.46 43.38C153.66 43.38 154.607 43.5333 155.3 43.84C156.007 44.1333 156.513 44.5667 156.82 45.14C157.127 45.7 157.28 46.3733 157.28 47.16V49.82L157.68 51.84L157.28 53.02H153.86V52.04L153.66 51.94C153.553 52.0467 153.367 52.2 153.1 52.4C152.833 52.6 152.48 52.7867 152.04 52.96C151.6 53.12 151.073 53.2 150.46 53.2ZM152.16 50.58C152.52 50.58 152.827 50.5467 153.08 50.48C153.347 50.4133 153.54 50.3533 153.66 50.3V49.92C153.66 49.7467 153.533 49.58 153.28 49.42C153.04 49.26 152.66 49.18 152.14 49.18C151.42 49.18 151.06 49.4333 151.06 49.94C151.06 50.1533 151.14 50.3133 151.3 50.42C151.46 50.5267 151.747 50.58 152.16 50.58ZM159.697 53L159.677 42.04L159.277 40.04L159.697 38.84H163.297V53H159.697ZM170.692 53.2C169.959 53.2 169.266 53.1333 168.612 53C167.959 52.8533 167.392 52.68 166.912 52.48C166.432 52.28 166.079 52.0933 165.852 51.92V48.34C166.492 48.7 167.299 49.04 168.272 49.36C169.246 49.6667 170.326 49.82 171.512 49.82C171.992 49.82 172.346 49.76 172.572 49.64C172.812 49.5067 172.932 49.28 172.932 48.96C172.932 48.6133 172.666 48.3267 172.132 48.1C171.612 47.86 170.786 47.5667 169.652 47.22C168.772 46.94 168.019 46.6333 167.392 46.3C166.779 45.9533 166.306 45.5267 165.972 45.02C165.652 44.5 165.492 43.84 165.492 43.04C165.492 42.2133 165.706 41.4667 166.132 40.8C166.559 40.1333 167.226 39.6067 168.132 39.22C169.039 38.8333 170.199 38.64 171.612 38.64C172.039 38.64 172.492 38.66 172.972 38.7C173.466 38.7267 173.859 38.7667 174.152 38.82L176.412 40.48L175.632 42.92L170.892 41.62C170.346 41.62 169.939 41.7333 169.672 41.96C169.419 42.1867 169.292 42.46 169.292 42.78C169.292 43.1667 169.512 43.4733 169.952 43.7C170.392 43.9267 171.026 44.1533 171.852 44.38C173.159 44.74 174.172 45.14 174.892 45.58C175.612 46.02 176.119 46.52 176.412 47.08C176.706 47.6267 176.852 48.2467 176.852 48.94C176.852 50.22 176.339 51.2533 175.312 52.04C174.286 52.8133 172.746 53.2 170.692 53.2ZM182.316 53.2C181.41 53.2 180.683 52.9333 180.136 52.4C179.59 51.8667 179.316 51.1933 179.316 50.38V46.02H177.856V44.12L179.116 43.14L180.536 40.66H182.896V43.56H185.696V46.16H182.896V50.44L185.696 50.42V52.6C185.696 52.6 185.536 52.6533 185.216 52.76C184.91 52.8533 184.503 52.9467 183.996 53.04C183.49 53.1467 182.93 53.2 182.316 53.2ZM191.909 53.2C190.282 53.2 189.022 52.8133 188.129 52.04C187.236 51.2667 186.789 50.0133 186.789 48.28C186.789 46.5333 187.236 45.28 188.129 44.52C189.022 43.7467 190.282 43.36 191.909 43.36C193.576 43.36 194.836 43.7467 195.689 44.52C196.556 45.28 196.989 46.5333 196.989 48.28C196.989 50.0133 196.556 51.2667 195.689 52.04C194.836 52.8133 193.576 53.2 191.909 53.2ZM191.909 50.6C192.456 50.6 192.836 50.4 193.049 50C193.262 49.5867 193.369 49.0133 193.369 48.28C193.369 47.5333 193.262 46.96 193.049 46.56C192.836 46.16 192.456 45.96 191.909 45.96C191.349 45.96 190.956 46.16 190.729 46.56C190.516 46.96 190.409 47.5333 190.409 48.28C190.409 49.0133 190.516 49.5867 190.729 50C190.956 50.4 191.349 50.6 191.909 50.6ZM198.7 53V46.74L198.28 44.74L198.7 43.54H201.42L201.82 44C201.82 44 201.914 43.9467 202.1 43.84C202.287 43.72 202.547 43.6067 202.88 43.5C203.227 43.3933 203.627 43.34 204.08 43.34C204.347 43.34 204.614 43.36 204.88 43.4C205.147 43.44 205.354 43.4933 205.5 43.56L206.8 44.66L205.5 47.22L202.86 46.12L202.26 46.32V53H198.7ZM211.991 53.2C210.965 53.2 210.051 53.0467 209.251 52.74C208.451 52.4333 207.825 51.92 207.371 51.2C206.918 50.48 206.691 49.5067 206.691 48.28C206.691 47.4 206.838 46.6467 207.131 46.02C207.438 45.3933 207.845 44.8867 208.351 44.5C208.858 44.1 209.425 43.8133 210.051 43.64C210.678 43.4533 211.325 43.36 211.991 43.36C213.138 43.36 214.018 43.4733 214.631 43.7C215.258 43.9267 215.671 44.1067 215.871 44.24L216.871 47.42L216.471 48.66H210.271C210.365 49.1533 210.611 49.5667 211.011 49.9C211.411 50.2333 212.071 50.4 212.991 50.4C213.711 50.4 214.331 50.32 214.851 50.16C215.371 50 215.778 49.86 216.071 49.74V52.42C215.671 52.6333 215.091 52.82 214.331 52.98C213.585 53.1267 212.805 53.2 211.991 53.2ZM210.291 47.38L213.051 46.98L212.871 46.12C212.778 46.0667 212.638 46.0267 212.451 46C212.278 45.9733 212.125 45.96 211.991 45.96C211.618 45.96 211.305 46.04 211.051 46.2C210.811 46.36 210.625 46.5533 210.491 46.78C210.371 46.9933 210.305 47.1933 210.291 47.38Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id={`filter0_${id}`}
            x="-4"
            y="0"
            width="260"
            height="89"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <clipPath id="clip0">
            <rect
              width="55"
              height="53"
              fill="white"
              transform="translate(35 14)"
            />
          </clipPath>
        </defs>
      </svg>
    </S.Wrapper>
  );
};
