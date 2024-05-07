import Card from "../Components/Card.jsx"
function Features(){
    return(
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <Card
                    icon={"bi-collection"}
                    header={"Fresh new layout"}
                    explanation={"With Bootstrap 5, we've created a fresh new layout for this template!"}
                    />
                    <Card
                    icon={"bi-cloud-download"}
                    header={"Free to download"}
                    explanation={"As always, Start Bootstrap has a powerful collectin of free templates."}
                    />
                    <Card
                    icon={"bi-card-heading"}
                    header={"Jumbotron hero header"}
                    explanation={"The heroic part of this template is the jumbotron hero header!"}
                    />
                    <Card
                    icon={"bi-bootstrap"}
                    header={"Feature boxes"}
                    explanation={"We've created some custom feature boxes using Bootstrap icons!"}
                    />
                    <Card
                    icon={"bi-code"}
                    header={"Simple clean code"}
                    explanation={"We keep our dependencies up to date and squash bugs as they come!"}
                    />
                    <Card
                    icon={"bi-patch-check"}
                    header={"A name you trust"}
                    explanation={"Start Bootstrap has been the leader in free Bootstrap templates since 2013!"}
                    />
                </div>
            </div>    
    )
};

export default Features