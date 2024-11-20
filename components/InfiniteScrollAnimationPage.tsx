/** @format */
"use client";
import { useEffect } from "react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const InfiniteScrollAnimationPage = () => {
  useEffect(() => {
    // Ambil elemen kontainer dan teks untuk scrolling
    const container = document.querySelector(".scrolling-text");
    const scrollingText = gsap.utils.toArray(".scroll-item") as HTMLElement[];

    // Hitung total lebar konten yang akan di-scroll
    const totalWidth = scrollingText.reduce((sum, el: HTMLElement) => sum + el.offsetWidth + 0, 0);

    // Atur posisi setiap elemen teks
    gsap.set(scrollingText, {
      x: (i) => i * (totalWidth / scrollingText.length),
    });

    // Buat animasi timeline untuk scrolling horizontal
    const tl = gsap.timeline({
      repeat: -1, // Animasi berulang terus-menerus
      defaults: { ease: "none" },
    });

    tl.to(scrollingText, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    // Tambahkan ScrollTrigger untuk mengontrol kecepatan animasi
    const st = ScrollTrigger.create({
      trigger: ".sponsors-section", // Ganti selector sesuai elemen Anda
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        tl.timeScale(self.direction === 1 ? 1 : -1); // Animasi maju/mundur
      },
    });

    // Bersihkan efek saat komponen tidak digunakan
    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  return (
    <div className="scrolling-text relative overflow-hidden bg-black text-white py-4">
      <div className="animate-scroll flex items-center whitespace-nowrap content-center" style={{ willChange: "transform", display: "inline-flex" }}>
        <div className="scroll-content flex">
          <div className="scroll-item flex">
            <span className="mx-4">DISCOVER STYLISH, CURATED FASHION</span>
            <span className="icon-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clipPath="url(#clip0_2295_387)">
                  <path
                    d="M20.5 35C28.7843 35 35.5 28.2843 35.5 20C35.5 11.7157 28.7843 5 20.5 5C12.2157 5 5.5 11.7157 5.5 20C5.5 28.2843 12.2157 35 20.5 35Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M26.75 20C26.75 30 20.5 35 20.5 35C20.5 35 14.25 30 14.25 20C14.25 10 20.5 5 20.5 5C20.5 5 26.75 10 26.75 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.35315 15H34.6469" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.35315 25H34.6469" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2295_387">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="scroll-item flex">
            <span className="mx-4">THAT EMPOWERS YOU</span>
            <span className="icon-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clipPath="url(#clip0_2295_394)">
                  <path d="M20.5 8.75V28.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M29.8374 23.7406C31.0953 23.8156 34.4468 23.5391 35.6749 18.7047C36.939 13.725 38.0343 7.5 33.1453 7.5C28.2562 7.5 20.4999 14.9687 20.4999 19.9484C20.4999 14.9687 12.7437 7.5 7.85463 7.5C2.96556 7.5 4.06088 13.725 5.32494 18.7047C6.55306 23.5391 9.90463 23.8156 11.1624 23.7406"
                    fill="white"
                  />
                  <path
                    d="M29.8374 23.7406C31.0953 23.8156 34.4468 23.5391 35.6749 18.7047C36.939 13.725 38.0343 7.5 33.1453 7.5C28.2562 7.5 20.4999 14.9687 20.4999 19.9484C20.4999 14.9687 12.7437 7.5 7.85463 7.5C2.96556 7.5 4.06088 13.725 5.32494 18.7047C6.55306 23.5391 9.90463 23.8156 11.1624 23.7406"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.2501 22.5C13.1671 22.6174 12.1412 23.0457 11.2963 23.7333C10.4514 24.421 9.82369 25.3385 9.48885 26.3751C9.15401 27.4117 9.12641 28.523 9.40937 29.575C9.69234 30.6269 10.2738 31.5744 11.0835 32.3032C11.8932 33.0319 12.8965 33.5106 13.9723 33.6816C15.0482 33.8526 16.1505 33.7085 17.1462 33.2667C18.1419 32.8249 18.9885 32.1043 19.5836 31.1919C20.1787 30.2795 20.497 29.2143 20.5001 28.125C20.5068 29.2094 20.8268 30.2687 21.4215 31.1754C22.0163 32.0821 22.8605 32.7976 23.8524 33.2357C24.8443 33.6738 25.9418 33.8158 27.0126 33.6447C28.0834 33.4736 29.0819 32.9966 29.8879 32.2712C30.6939 31.5458 31.273 30.6029 31.5556 29.5559C31.8382 28.509 31.8121 27.4028 31.4806 26.3703C31.149 25.3379 30.5261 24.4233 29.6868 23.7366C28.8476 23.0499 27.8277 22.6205 26.7501 22.5"
                    fill="white"
                  />
                  <path
                    d="M14.2501 22.5C13.1671 22.6174 12.1412 23.0457 11.2963 23.7333C10.4514 24.421 9.82369 25.3385 9.48885 26.3751C9.15401 27.4117 9.12641 28.523 9.40937 29.575C9.69234 30.6269 10.2738 31.5744 11.0835 32.3032C11.8932 33.0319 12.8965 33.5106 13.9723 33.6816C15.0482 33.8526 16.1505 33.7085 17.1462 33.2667C18.1419 32.8249 18.9885 32.1043 19.5836 31.1919C20.1787 30.2795 20.497 29.2143 20.5001 28.125C20.5068 29.2094 20.8268 30.2687 21.4215 31.1754C22.0163 32.0821 22.8605 32.7976 23.8524 33.2357C24.8443 33.6738 25.9418 33.8158 27.0126 33.6447C28.0834 33.4736 29.0819 32.9966 29.8879 32.2712C30.6939 31.5458 31.273 30.6029 31.5556 29.5559C31.8382 28.509 31.8121 27.4028 31.4806 26.3703C31.149 25.3379 30.5261 24.4233 29.6868 23.7366C28.8476 23.0499 27.8277 22.6205 26.7501 22.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2295_394">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="scroll-item flex">
            <span className="mx-4">TO FEEL CONFIDENT </span>
            <span className="icon-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clipPath="url(#clip0_2295_400)">
                  <path
                    d="M25.4718 24.9721L21.6687 35.4314C21.5799 35.6706 21.42 35.877 21.2105 36.0227C21.001 36.1684 20.752 36.2464 20.4968 36.2464C20.2416 36.2464 19.9926 36.1684 19.7831 36.0227C19.5736 35.877 19.4137 35.6706 19.3249 35.4314L15.5281 24.9721L5.06868 21.1689C4.82946 21.0801 4.62314 20.9202 4.47745 20.7108C4.33175 20.5013 4.25366 20.2522 4.25366 19.9971C4.25366 19.7419 4.33175 19.4928 4.47745 19.2833C4.62314 19.0739 4.82946 18.914 5.06868 18.8252L15.5281 15.0283L19.3312 4.56892C19.42 4.3297 19.5799 4.12339 19.7893 3.97769C19.9988 3.832 20.2479 3.75391 20.5031 3.75391C20.7582 3.75391 21.0073 3.832 21.2168 3.97769C21.4263 4.12339 21.5861 4.3297 21.6749 4.56892L25.4781 15.0283L35.9374 18.8314C36.1767 18.9202 36.383 19.0801 36.5287 19.2896C36.6744 19.4991 36.7524 19.7481 36.7524 20.0033C36.7524 20.2585 36.6744 20.5075 36.5287 20.717C36.383 20.9265 36.1767 21.0864 35.9374 21.1752L25.4718 24.9721Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2295_400">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="scroll-item flex">
            <span className="mx-4">AND BEAUTIFUL EVERY DAY </span>
            <span className="icon-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clipPath="url(#clip0_2295_404)">
                  <path
                    d="M20.5 35C28.7843 35 35.5 28.2843 35.5 20C35.5 11.7157 28.7843 5 20.5 5C12.2157 5 5.5 11.7157 5.5 20C5.5 28.2843 12.2157 35 20.5 35Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M14.875 18.75C15.9105 18.75 16.75 17.9105 16.75 16.875C16.75 15.8395 15.9105 15 14.875 15C13.8395 15 13 15.8395 13 16.875C13 17.9105 13.8395 18.75 14.875 18.75Z" fill="black" />
                  <path d="M26.125 18.75C27.1605 18.75 28 17.9105 28 16.875C28 15.8395 27.1605 15 26.125 15C25.0895 15 24.25 15.8395 24.25 16.875C24.25 17.9105 25.0895 18.75 26.125 18.75Z" fill="black" />
                  <path d="M26.75 23.75C25.4531 25.9922 23.2766 27.5 20.5 27.5C17.7234 27.5 15.5469 25.9922 14.25 23.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2295_404">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        {/* Duplikat konten untuk scrolling mulus */}
        <div className="scroll-content flex">
          <div className="scroll-item flex">
            <span className="mx-4">DISCOVER STYLISH, CURATED FASHION</span>
            <span className="icon-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clipPath="url(#clip0_2295_387)">
                  <path
                    d="M20.5 35C28.7843 35 35.5 28.2843 35.5 20C35.5 11.7157 28.7843 5 20.5 5C12.2157 5 5.5 11.7157 5.5 20C5.5 28.2843 12.2157 35 20.5 35Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M26.75 20C26.75 30 20.5 35 20.5 35C20.5 35 14.25 30 14.25 20C14.25 10 20.5 5 20.5 5C20.5 5 26.75 10 26.75 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.35315 15H34.6469" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.35315 25H34.6469" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2295_387">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="scroll-item flex">
            <span className="mx-4">THAT EMPOWERS YOU</span>
            <span className="icon-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clipPath="url(#clip0_2295_394)">
                  <path d="M20.5 8.75V28.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M29.8374 23.7406C31.0953 23.8156 34.4468 23.5391 35.6749 18.7047C36.939 13.725 38.0343 7.5 33.1453 7.5C28.2562 7.5 20.4999 14.9687 20.4999 19.9484C20.4999 14.9687 12.7437 7.5 7.85463 7.5C2.96556 7.5 4.06088 13.725 5.32494 18.7047C6.55306 23.5391 9.90463 23.8156 11.1624 23.7406"
                    fill="white"
                  />
                  <path
                    d="M29.8374 23.7406C31.0953 23.8156 34.4468 23.5391 35.6749 18.7047C36.939 13.725 38.0343 7.5 33.1453 7.5C28.2562 7.5 20.4999 14.9687 20.4999 19.9484C20.4999 14.9687 12.7437 7.5 7.85463 7.5C2.96556 7.5 4.06088 13.725 5.32494 18.7047C6.55306 23.5391 9.90463 23.8156 11.1624 23.7406"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.2501 22.5C13.1671 22.6174 12.1412 23.0457 11.2963 23.7333C10.4514 24.421 9.82369 25.3385 9.48885 26.3751C9.15401 27.4117 9.12641 28.523 9.40937 29.575C9.69234 30.6269 10.2738 31.5744 11.0835 32.3032C11.8932 33.0319 12.8965 33.5106 13.9723 33.6816C15.0482 33.8526 16.1505 33.7085 17.1462 33.2667C18.1419 32.8249 18.9885 32.1043 19.5836 31.1919C20.1787 30.2795 20.497 29.2143 20.5001 28.125C20.5068 29.2094 20.8268 30.2687 21.4215 31.1754C22.0163 32.0821 22.8605 32.7976 23.8524 33.2357C24.8443 33.6738 25.9418 33.8158 27.0126 33.6447C28.0834 33.4736 29.0819 32.9966 29.8879 32.2712C30.6939 31.5458 31.273 30.6029 31.5556 29.5559C31.8382 28.509 31.8121 27.4028 31.4806 26.3703C31.149 25.3379 30.5261 24.4233 29.6868 23.7366C28.8476 23.0499 27.8277 22.6205 26.7501 22.5"
                    fill="white"
                  />
                  <path
                    d="M14.2501 22.5C13.1671 22.6174 12.1412 23.0457 11.2963 23.7333C10.4514 24.421 9.82369 25.3385 9.48885 26.3751C9.15401 27.4117 9.12641 28.523 9.40937 29.575C9.69234 30.6269 10.2738 31.5744 11.0835 32.3032C11.8932 33.0319 12.8965 33.5106 13.9723 33.6816C15.0482 33.8526 16.1505 33.7085 17.1462 33.2667C18.1419 32.8249 18.9885 32.1043 19.5836 31.1919C20.1787 30.2795 20.497 29.2143 20.5001 28.125C20.5068 29.2094 20.8268 30.2687 21.4215 31.1754C22.0163 32.0821 22.8605 32.7976 23.8524 33.2357C24.8443 33.6738 25.9418 33.8158 27.0126 33.6447C28.0834 33.4736 29.0819 32.9966 29.8879 32.2712C30.6939 31.5458 31.273 30.6029 31.5556 29.5559C31.8382 28.509 31.8121 27.4028 31.4806 26.3703C31.149 25.3379 30.5261 24.4233 29.6868 23.7366C28.8476 23.0499 27.8277 22.6205 26.7501 22.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2295_394">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="scroll-item flex">
            <span className="mx-4">TO FEEL CONFIDENT </span>
            <span className="icon-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clipPath="url(#clip0_2295_400)">
                  <path
                    d="M25.4718 24.9721L21.6687 35.4314C21.5799 35.6706 21.42 35.877 21.2105 36.0227C21.001 36.1684 20.752 36.2464 20.4968 36.2464C20.2416 36.2464 19.9926 36.1684 19.7831 36.0227C19.5736 35.877 19.4137 35.6706 19.3249 35.4314L15.5281 24.9721L5.06868 21.1689C4.82946 21.0801 4.62314 20.9202 4.47745 20.7108C4.33175 20.5013 4.25366 20.2522 4.25366 19.9971C4.25366 19.7419 4.33175 19.4928 4.47745 19.2833C4.62314 19.0739 4.82946 18.914 5.06868 18.8252L15.5281 15.0283L19.3312 4.56892C19.42 4.3297 19.5799 4.12339 19.7893 3.97769C19.9988 3.832 20.2479 3.75391 20.5031 3.75391C20.7582 3.75391 21.0073 3.832 21.2168 3.97769C21.4263 4.12339 21.5861 4.3297 21.6749 4.56892L25.4781 15.0283L35.9374 18.8314C36.1767 18.9202 36.383 19.0801 36.5287 19.2896C36.6744 19.4991 36.7524 19.7481 36.7524 20.0033C36.7524 20.2585 36.6744 20.5075 36.5287 20.717C36.383 20.9265 36.1767 21.0864 35.9374 21.1752L25.4718 24.9721Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2295_400">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="scroll-item flex">
            <span className="mx-4">AND BEAUTIFUL EVERY DAY </span>
            <span className="icon-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clipPath="url(#clip0_2295_404)">
                  <path
                    d="M20.5 35C28.7843 35 35.5 28.2843 35.5 20C35.5 11.7157 28.7843 5 20.5 5C12.2157 5 5.5 11.7157 5.5 20C5.5 28.2843 12.2157 35 20.5 35Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M14.875 18.75C15.9105 18.75 16.75 17.9105 16.75 16.875C16.75 15.8395 15.9105 15 14.875 15C13.8395 15 13 15.8395 13 16.875C13 17.9105 13.8395 18.75 14.875 18.75Z" fill="black" />
                  <path d="M26.125 18.75C27.1605 18.75 28 17.9105 28 16.875C28 15.8395 27.1605 15 26.125 15C25.0895 15 24.25 15.8395 24.25 16.875C24.25 17.9105 25.0895 18.75 26.125 18.75Z" fill="black" />
                  <path d="M26.75 23.75C25.4531 25.9922 23.2766 27.5 20.5 27.5C17.7234 27.5 15.5469 25.9922 14.25 23.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2295_404">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollAnimationPage;
