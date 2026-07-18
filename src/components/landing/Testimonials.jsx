import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      company: "Google",
      review:
        "This platform made my job search simple and effective. Within two weeks, I received multiple interview calls.",
    },
    {
      name: "Priya Verma",
      role: "Software Engineer",
      company: "Microsoft",
      review:
        "The interface is clean, responsive, and easy to use. I found the perfect opportunity without any hassle.",
    },
    {
      name: "Aman Patel",
      role: "Full Stack Developer",
      company: "Amazon",
      review:
        "Excellent platform with verified companies and an easy application process. Highly recommended.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            What Our Users Say
          </h2>

          <p className="text-muted">
            Thousands of professionals trust our platform to build their careers.
          </p>
        </div>

        <div className="row g-4">

          {testimonials.map((item, index) => (
            <div className="col-md-4" key={index}>

              <div className="card border-0 shadow rounded-4 h-100">

                <div className="card-body p-4">

                  <FaQuoteLeft
                    className="text-primary mb-3"
                    size={28}
                  />

                  <p className="text-muted">
                    "{item.review}"
                  </p>

                  <div className="mb-3">

                    {[1,2,3,4,5].map((star)=>(
                      <FaStar
                        key={star}
                        className="text-warning me-1"
                      />
                    ))}

                  </div>

                  <hr />

                  <h5 className="fw-bold mb-1">
                    {item.name}
                  </h5>

                  <small className="text-muted">
                    {item.role}
                  </small>

                  <div className="mt-2">

                    <span className="badge bg-primary">
                      {item.company}
                    </span>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}