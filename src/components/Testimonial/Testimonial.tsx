import './Testimonial.css';

interface TestimonialProps {
  label?: string;
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

export default function Testimonial({
  label,
  quote,
  author,
  role,
  image,
}: TestimonialProps) {
  return (
    <section className="testimonial section" id="testimonial-section" aria-label="Testimonio">
      <div className="container container--narrow">
        <div className="testimonial__content reveal">
          {label && <span className="section-label">{label}</span>}
          <div className="testimonial__quote-mark">❝</div>
          <blockquote className="testimonial__quote">
            {quote}
          </blockquote>
          <div className="testimonial__author-info">
            {image && (
              <img
                src={image}
                alt={author}
                className="testimonial__author-image"
                loading="lazy"
              />
            )}
            <div>
              <p className="testimonial__author-name">{author}</p>
              {role && <p className="testimonial__author-role">{role}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
