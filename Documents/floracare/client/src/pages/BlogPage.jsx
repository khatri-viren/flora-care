import React from "react";
import Contributor from "../components/BlogPage/Contributor";
import copyLinksvg from '../assets/copyLink.svg'
import linkedinsvg from '../assets/linkedin.svg'
import facebooksvg from '../assets/facebook.svg'
import twittersvg from '../assets/twitter.svg'

const BlogPage = () => {
  return (
    <div className="text-udark pt-5">
      <div className="heroSection bg-[url('https://placehold.co/1200x400')] bg-cover flex w-full h-96">
        <div className="backdrop bg-[rgba(0,0,0,0.5)] w-full h-full flex">
          <div className="heroContent flex flex-col w-full my-auto mx-12 text-center">
            <h1 className="text-5xl font-bold text-ubg mx-auto mt-3 mb-10">
              10 Tips for Healthy and Vibrant Houseplants
            </h1>
            <div className="space-y-4">
              <img
                src="https://placehold.co/14x14"
                className="rounded-full w-14 mx-auto"
                alt=""
              />
              <h2 className="text-sm text-ubg font-semibold">John Doe</h2>
              <span className="text-sm text-ubg font-light">
                January 11, 2023
              </span>
              <span className="text-sm text-ubg font-light mx-3">
                5 min read
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contentConatiner flex mx-5 lg:mx-20 my-12">
        <aside className="leftSide hidden lg:block w-fit mr-3 min-w-fit">
          <div className="font-bold text-lg">Contributor</div>
          <div>
            <Contributor />
            <Contributor />
            <Contributor />
          </div>
          <hr className="border border-solid border-umedium my-8" />
          <div className="newsletter">
            <div className="text-lg font-bold">Subscribe to newsletter</div>
            <input
              type="text"
              name="newsEmail"
              id=""
              placeholder="Your Email"
              className="border border-solid border-udark w-full bg-ubg py-2 my-2 px-2"
            />
            <button className="w-full py-2 my-2 bg-udark text-ubg">
              Subscribe
            </button>
          </div>
          <hr className="border border-solid border-umedium my-8" />
          <div className="socials space-x-2">
            <div className="text-lg font-bold mb-2">Share</div>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={copyLinksvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={linkedinsvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={facebooksvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={twittersvg} alt="" />
            </button>
          </div>
        </aside>
        <div className="rightSide lg:ml-16 space-y-5">
            <div className="text-3xl font-bold">Introduction</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus molestias voluptates, amet aliquid eius voluptas dolores, doloremque, earum maxime architecto explicabo repellat at optio ducimus dignissimos quidem. Inventore illo quibusdam ratione necessitatibus similique nisi, dignissimos sapiente magni nesciunt? Consectetur delectus corporis libero magni repudiandae non eos aspernatur perspiciatis impedit dolores cupiditate, eveniet explicabo.</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, fugiat voluptate ullam cum iste minus sequi enim, praesentium sint suscipit illum mollitia molestiae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil aliquam suscipit corrupti est eius. Blanditiis possimus maiores ad, debitis rerum illo expedita eligendi.</p>

            <img src="https://placehold.co/200x100" className="w-full " alt="" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima quaerat nisi quam nemo quos iste quibusdam eveniet corporis. Officiis adipisci repudiandae nobis dolorum ullam ut, inventore cupiditate sequi, quibusdam totam reiciendis sunt numquam excepturi cumque eligendi doloribus aspernatur maxime molestias incidunt facilis rerum delectus molestiae consequuntur hic. Voluptate commodi modi fugit, ipsam vitae cumque debitis ut ad facere nam!</p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eligendi veritatis sapiente velit excepturi totam asperiores consequatur distinctio, saepe officiis esse voluptas neque in accusantium quidem dolores, omnis cupiditate expedita quos animi, commodi numquam dignissimos facere deserunt! Dolor voluptate, doloremque, ex eos id odit reprehenderit voluptatem blanditiis error ipsa quibusdam nam quas, eius nemo repellat excepturi veritatis? Porro, assumenda quisquam!</p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat possimus ipsam rerum incidunt doloribus quaerat unde cumque harum consequatur sint non natus accusantium, provident et eligendi autem magnam est quisquam, minima sapiente obcaecati nemo. Vel quo officia culpa dolores beatae sit veritatis vero corporis animi laudantium ipsam atque molestias aspernatur, nemo delectus repellendus porro sunt nisi ducimus officiis odit iste.</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate eaque suscipit earum porro enim ab! Assumenda, perferendis eum cumque cum tempora quis officiis fugit reiciendis at necessitatibus recusandae ipsum ab incidunt deserunt deleniti aut rem aliquam dignissimos quos maiores. Placeat, modi explicabo. Tempore similique, inventore in ipsum totam aperiam, vitae sunt labore officiis veniam quis expedita repellendus commodi dolores?</p>

            <div className="text-2xl font-bold">Conclusion</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ullam quibusdam in quasi, cupiditate exercitationem quisquam voluptates amet maiores magnam dolor nulla sequi iste ut iure. Vel necessitatibus inventore doloribus eum, distinctio repellat commodi. Explicabo quidem inventore repellat fuga officia sint ducimus culpa possimus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores assumenda eius, reprehenderit vero perspiciatis rem aliquam sit deserunt enim neque vitae atque expedita?</p>
        </div>
      </div>
        <div className="lg:hidden w-3/4 mx-auto flex space-x-4">
          <div>

        <div className="font-bold text-lg">Contributor</div>
          <div>
            <Contributor />
            <Contributor />
            <Contributor />
          </div>
          </div>
          <div>
          <div className="newsletter">
            <div className="text-lg font-bold">Subscribe to newsletter</div>
            <input
              type="text"
              name="newsEmail"
              id=""
              placeholder="Your Email"
              className="border border-solid border-udark w-full bg-ubg py-2 my-2 px-2"
            />
            <button className="w-full py-2 my-2 bg-udark text-ubg">
              Subscribe
            </button>
          </div>
          <div className="socials space-x-2">
            <div className="text-lg font-bold mb-2">Share</div>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={copyLinksvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={linkedinsvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={facebooksvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={twittersvg} alt="" />
            </button>
          </div>
          </div>

        </div>
    </div>
  );
};

export default BlogPage;
