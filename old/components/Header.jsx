import Link from 'next/link';
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
export default function Header() {
  return (
    <header>
      <div className='container header'>
        <h2>
          <Link href='/' passHref>
            Abe Hidek Blog
          </Link>
        </h2>
        <div className='social-media'>
          <h2>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://github.com/abehidek'
            >
              <AiFillGithub />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://gitlab.com/abehidek'
            >
              <AiFillGitlab />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='mailto:hidek.abe@outlook.com'
            >
              <AiFillMail />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://twitter.com/abehidek'
            >
              <AiOutlineTwitter />
            </a>
          </h2>
        </div>
      </div>
    </header>
  );
}
