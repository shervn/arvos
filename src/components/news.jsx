export const News = (props) => {
  return (
    <div id="news">
      <div className="container">
        <div className="row">
            <div className="about-text">
              <h2>News</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="list-style">
                <div className="col-lg-8 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.map((d, i) => (
                          <li key={`${d}-${i}`}>
                            <b>{d.date}</b> {d.body}
                            </li>
                        ))
                      : "loading"}
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
