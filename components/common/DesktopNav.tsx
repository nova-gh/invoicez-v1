import Link from "next/link";
import { Session } from "typing";
import Avatar from "./Avatar";

const DesktopNav = ({ session }: Session) => {
  return (
    <header className="relative hidden overflow-hidden text-white bg-gray-800 border-l border-gray-700 lg:flex lg:flex-col ">
      <div className="sticky top-0 p-2 ease-linear bg-indigo-600 rounded-b-2xl hover:bg-indigo-700 ">
        <Link passHref href={"/"} className="flex ">
          <svg
            width="80"
            height="80"
            viewBox="0 0 120 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="p-2"
          >
            <path
              d="M2.63125 105.532V85.9317H7.16725V105.532H2.63125Z"
              fill="#E2EBFF"
            />
            <path
              d="M20.6668 90.2437C21.8614 90.2437 22.9254 90.4863 23.8588 90.9717C24.8108 91.4383 25.5574 92.1663 26.0988 93.1557C26.6401 94.1263 26.9108 95.377 26.9108 96.9077V105.532H22.5428V97.5797C22.5428 96.3663 22.2721 95.4703 21.7308 94.8917C21.2081 94.313 20.4614 94.0237 19.4908 94.0237C18.8001 94.0237 18.1748 94.173 17.6148 94.4717C17.0734 94.7517 16.6441 95.1903 16.3268 95.7877C16.0281 96.385 15.8788 97.1503 15.8788 98.0837V105.532H11.5108V90.4677H15.6828V94.6397L14.8988 93.3797C15.4401 92.3717 16.2148 91.597 17.2228 91.0557C18.2308 90.5143 19.3788 90.2437 20.6668 90.2437Z"
              fill="#E2EBFF"
            />
            <path
              d="M34.6847 105.532L28.3567 90.4677H32.8647L38.1287 103.432H35.8887L41.3487 90.4677H45.5487L39.1927 105.532H34.6847Z"
              fill="#E2EBFF"
            />
            <path
              d="M54.0889 105.756C52.4836 105.756 51.0556 105.42 49.8049 104.748C48.5729 104.076 47.5929 103.161 46.8649 102.004C46.1556 100.828 45.8009 99.493 45.8009 97.9997C45.8009 96.4877 46.1556 95.153 46.8649 93.9957C47.5929 92.8197 48.5729 91.905 49.8049 91.2517C51.0556 90.5797 52.4836 90.2437 54.0889 90.2437C55.6756 90.2437 57.0942 90.5797 58.3449 91.2517C59.5956 91.905 60.5756 92.8103 61.2849 93.9677C61.9942 95.125 62.3489 96.469 62.3489 97.9997C62.3489 99.493 61.9942 100.828 61.2849 102.004C60.5756 103.161 59.5956 104.076 58.3449 104.748C57.0942 105.42 55.6756 105.756 54.0889 105.756ZM54.0889 102.172C54.8169 102.172 55.4702 102.004 56.0489 101.668C56.6276 101.332 57.0849 100.856 57.4209 100.24C57.7569 99.605 57.9249 98.8583 57.9249 97.9997C57.9249 97.1223 57.7569 96.3757 57.4209 95.7597C57.0849 95.1437 56.6276 94.6677 56.0489 94.3317C55.4702 93.9957 54.8169 93.8277 54.0889 93.8277C53.3609 93.8277 52.7076 93.9957 52.1289 94.3317C51.5502 94.6677 51.0836 95.1437 50.7289 95.7597C50.3929 96.3757 50.2249 97.1223 50.2249 97.9997C50.2249 98.8583 50.3929 99.605 50.7289 100.24C51.0836 100.856 51.5502 101.332 52.1289 101.668C52.7076 102.004 53.3609 102.172 54.0889 102.172Z"
              fill="#E2EBFF"
            />
            <path
              d="M65.2686 105.532V90.4677H69.6366V105.532H65.2686ZM67.4526 88.3677C66.6499 88.3677 65.9966 88.1343 65.4926 87.6677C64.9886 87.201 64.7366 86.6223 64.7366 85.9317C64.7366 85.241 64.9886 84.6623 65.4926 84.1957C65.9966 83.729 66.6499 83.4957 67.4526 83.4957C68.2552 83.4957 68.9086 83.7197 69.4126 84.1677C69.9166 84.597 70.1686 85.157 70.1686 85.8477C70.1686 86.5757 69.9166 87.1823 69.4126 87.6677C68.9272 88.1343 68.2739 88.3677 67.4526 88.3677Z"
              fill="#E2EBFF"
            />
            <path
              d="M80.9704 105.756C79.3464 105.756 77.8998 105.429 76.6304 104.776C75.3611 104.104 74.3624 103.18 73.6344 102.004C72.9251 100.828 72.5704 99.493 72.5704 97.9997C72.5704 96.4877 72.9251 95.153 73.6344 93.9957C74.3624 92.8197 75.3611 91.905 76.6304 91.2517C77.8998 90.5797 79.3464 90.2437 80.9704 90.2437C82.5571 90.2437 83.9384 90.5797 85.1144 91.2517C86.2904 91.905 87.1584 92.8477 87.7184 94.0797L84.3304 95.8997C83.9384 95.1903 83.4438 94.6677 82.8464 94.3317C82.2678 93.9957 81.6331 93.8277 80.9424 93.8277C80.1958 93.8277 79.5238 93.9957 78.9264 94.3317C78.3291 94.6677 77.8531 95.1437 77.4984 95.7597C77.1624 96.3757 76.9944 97.1223 76.9944 97.9997C76.9944 98.877 77.1624 99.6237 77.4984 100.24C77.8531 100.856 78.3291 101.332 78.9264 101.668C79.5238 102.004 80.1958 102.172 80.9424 102.172C81.6331 102.172 82.2678 102.013 82.8464 101.696C83.4438 101.36 83.9384 100.828 84.3304 100.1L87.7184 101.948C87.1584 103.161 86.2904 104.104 85.1144 104.776C83.9384 105.429 82.5571 105.756 80.9704 105.756Z"
              fill="#E2EBFF"
            />
            <path
              d="M97.518 105.756C95.8007 105.756 94.2887 105.42 92.982 104.748C91.694 104.076 90.6953 103.161 89.986 102.004C89.2767 100.828 88.922 99.493 88.922 97.9997C88.922 96.4877 89.2673 95.153 89.958 93.9957C90.6673 92.8197 91.6287 91.905 92.842 91.2517C94.0553 90.5797 95.4273 90.2437 96.958 90.2437C98.4327 90.2437 99.758 90.561 100.934 91.1957C102.129 91.8117 103.071 92.7077 103.762 93.8837C104.453 95.041 104.798 96.4317 104.798 98.0557C104.798 98.2237 104.789 98.4197 104.77 98.6437C104.751 98.849 104.733 99.045 104.714 99.2317H92.478V96.6837H102.418L100.738 97.4397C100.738 96.6557 100.579 95.9743 100.262 95.3957C99.9447 94.817 99.506 94.369 98.946 94.0517C98.386 93.7157 97.7327 93.5477 96.986 93.5477C96.2393 93.5477 95.5767 93.7157 94.998 94.0517C94.438 94.369 93.9993 94.8263 93.682 95.4237C93.3647 96.0023 93.206 96.693 93.206 97.4957V98.1677C93.206 98.989 93.3833 99.717 93.738 100.352C94.1113 100.968 94.6247 101.444 95.278 101.78C95.95 102.097 96.734 102.256 97.63 102.256C98.4327 102.256 99.1327 102.134 99.73 101.892C100.346 101.649 100.906 101.285 101.41 100.8L103.734 103.32C103.043 104.104 102.175 104.71 101.13 105.14C100.085 105.55 98.8807 105.756 97.518 105.756Z"
              fill="#E2EBFF"
            />
            <path
              d="M106.533 105.532V102.9L115.437 92.3717L116.193 93.8277H106.729V90.4677H119.721V93.0997L110.817 103.628L110.033 102.172H119.973V105.532H106.533Z"
              fill="#E2EBFF"
            />
            <path
              d="M16.7043 64.0304C16.514 64.0304 16.321 63.9945 16.1376 63.9077C0.0574989 56.377 -2.49591 40.472 1.93671 28.8686C4.34673 22.5554 8.75454 17.3989 14.348 14.3574C20.34 11.0857 27.3385 10.3991 34.6526 12.3583C38.4166 5.61491 46.5276 1.09543 56.6172 0.174433C69.5125 -0.99611 81.8797 3.79636 88.1267 12.3914C88.5569 12.9856 88.4231 13.8211 87.8289 14.254C87.2333 14.6883 86.3992 14.556 85.9649 13.9617C80.2583 6.11125 68.8383 1.74343 56.8557 2.82987C47.2211 3.70536 39.6271 8.07319 36.536 14.5105C36.2506 15.102 35.5778 15.4025 34.9504 15.2123C19.4976 10.5646 8.48568 19.1995 4.42808 29.8199C0.421485 40.3065 2.73086 54.6839 17.2696 61.4935C17.9396 61.8037 18.2237 62.5923 17.9107 63.2652C17.6873 63.7491 17.2089 64.0304 16.7043 64.0304Z"
              fill="#E2EBFF"
            />
            <path
              d="M91.2661 66.4928C89.5137 66.4928 87.7365 66.3439 85.9566 66.0378C85.2259 65.9151 84.7364 65.2285 84.866 64.5019C84.986 63.7753 85.6712 63.2886 86.4061 63.4072C97.9957 65.387 109.312 60.1479 114.568 50.3796C119.515 41.1738 117.699 30.5892 109.718 22.0687C109.209 21.5324 109.238 20.6886 109.776 20.1853C110.313 19.6807 111.16 19.7069 111.659 20.2432C120.468 29.6379 122.434 41.3819 116.916 51.6452C111.933 60.9158 102.033 66.4928 91.2661 66.4928Z"
              fill="#E2EBFF"
            />
            <path
              d="M40.4626 72.0187V61.3432H27.6459C18.4567 61.3432 11.847 54.3848 11.5644 54.0939C0.0616369 40.9656 8.28439 28.0331 8.95032 27.0418C14.2764 18.2661 21.6057 16.4228 26.8201 16.4228C30.6777 16.4228 33.8764 17.4017 35.4551 17.9932C44.6443 7.67335 54.465 6.5359 58.3282 6.5359C58.9404 6.5359 59.3816 6.56485 59.6173 6.58966C60.4363 6.49867 61.2704 6.45731 62.0977 6.45731C73.7397 6.45731 82.7235 14.8855 85.128 17.3851C87.3009 16.8598 89.4586 16.5951 91.5336 16.5951C99.2751 16.5951 103.778 20.2405 104.465 20.8389C119.942 31.7667 111.448 49.2366 111.356 49.4131C106.012 59.9934 94.7598 61.1268 90.17 61.1268C89.1373 61.1268 88.4245 61.0799 88.1791 61.0482H80.4941V64.8052H73.8541V72.0187H40.4626ZM43.4034 69.071H70.905V61.8616H77.5436V58.1101L88.4149 58.1142C88.419 58.1225 89.0849 58.1887 90.1672 58.1887C94.2166 58.1887 104.116 57.2056 108.726 48.095C109.032 47.4801 116.18 32.656 102.701 23.202L102.545 23.0779C102.514 23.0448 98.572 19.5401 91.5322 19.5401C89.4407 19.5401 87.254 19.8462 85.0356 20.4583L84.145 20.6982L83.5383 20.0033C83.4432 19.8958 74.1216 9.40228 62.0977 9.40228C61.3283 9.40228 60.5521 9.44364 59.7883 9.53463L59.6146 9.55118L59.4381 9.53463C59.4381 9.53463 59.0355 9.485 58.3296 9.485C54.7766 9.485 45.5873 10.5756 36.9979 20.7079L36.2657 21.571L35.2455 21.0884C35.2083 21.0705 31.527 19.3691 26.8214 19.3691C20.3304 19.3691 15.1601 22.4754 11.45 28.5997L11.3921 28.6907C11.0612 29.1567 3.43401 40.3258 13.7304 52.103C14.0516 52.4366 19.9443 58.3982 27.6459 58.3982H43.4034V69.071Z"
              fill="#E2EBFF"
            />
            <path
              d="M40.202 54.2414V30.1453H46.9812V23.3661H68.0538C68.0538 23.3661 81.0359 23.0779 81.0359 36.3482V54.2428H77.7187V36.3468C77.7187 36.3468 75.5527 26.5385 67.6153 26.5385H50.5921V30.1453H61.5586C61.5586 30.1453 74.2553 30.1453 74.2553 42.6986V61.6024L74.2843 62.3207H70.8678V41.6853H61.6992V34.1808H43.5192V54.2538L40.202 54.2414Z"
              fill="#E2EBFF"
            />
            <path
              d="M60.286 39.2394H45.8907V41.5929H60.286V39.2394Z"
              fill="#E2EBFF"
            />
            <path
              d="M68.608 44.5929H45.8907V46.9533H68.608V44.5929Z"
              fill="#E2EBFF"
            />
            <path
              d="M68.608 49.9533H45.8907V52.3178H68.608V49.9533Z"
              fill="#E2EBFF"
            />
            <path
              d="M68.608 55.3178H45.8907V57.6782H68.608V55.3178Z"
              fill="#E2EBFF"
            />
            <path
              d="M68.608 59.6782H45.8907V62.0331H68.608V59.6782Z"
              fill="#E2EBFF"
            />
            <path
              d="M68.608 63.9187H45.8907V66.2777H68.608V63.9187Z"
              fill="#E2EBFF"
            />
          </svg>
        </Link>
      </div>
      {session?.user && (
        <div className="sticky bottom-0 flex justify-center py-4 mt-auto border-t border-gray-600 item-center ">
          <Link href="/setting">
            <Avatar session={session} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default DesktopNav;
