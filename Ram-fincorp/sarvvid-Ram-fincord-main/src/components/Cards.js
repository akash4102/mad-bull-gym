// import Card from "./Card";
import "../Styles/Cards.scss";

const data = [
  {
    icon: "mdi mdi-human icon",
    title: "Quick Payment Process",
    description:
      "Traditional loan usually come with complex documentation and time-consuming loan approval processes. However, when you opt for a personal loan at Ram Fincorp you don't have to wait for days or weeks for the loan amount to reach your bank account. We offer a speedy loan approval process to provide you with the loan proceeds within a few hours. If you need to fund emergency expenses such as sudden business credit requirements, medical bills, and others, then we are the best option! .",
  },
  {
    icon: "mdi mdi-human icon",
    title: "No Prepayment Fees",
    description:
      "Most banks levy a pre-closure charge on traditional loans or unsecured loans. However, at Ram Fincorp we don't levy pre-closure charges if you decide to prepay a part of your loan. If you happen to acquire or generate a substantial amount of money at any point of your tenure, you can utilize this amount to prepay a part of your outstanding principal. This helps to reduce your interest payments.",
  },
  {
    icon: "mdi mdi-human icon",
    title: "Poor Credit History",
    description:
      "Often the loan applications of borrowers are rejected due to low credit scores and poor credit history. In the case of traditional loans, individuals need to have a credit score of 750 or more. However, when you apply for loans at Ram Fincorp, your credit score won't be a hindrance. If you meet our eligibility requirements, you will get a loan even if you don't have a credit score of 750 or more.",
  },
];

const Cards = () => {
  return (
    <div className="information">
      <div className="container">
        <div className="row ">
          {data.map((item) => (
            <div className="col-lg-4 row-eq-height">
              <div className="information-box">
                <span className={item.icon}></span>
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div style={{display:"flex",flexDirection: "row", justifyContent: "space-evenly"}}>
    //     <Card />
    //     <Card />
    //     <Card />
    // </div>
  );
};

export default Cards;
