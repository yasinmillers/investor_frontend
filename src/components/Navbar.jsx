import React from "react";

const Narbar = ()=>{
    return(
        <div>
                <nav class="navbar navbar-expand-sm navbar-light bg-primary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">primary</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarID">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Love</a>
                                

                                <div>
                             <nav>
                              <h1>main components</h1>
                              <h3>react coureses</h3>
                              </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}
export default Narbar