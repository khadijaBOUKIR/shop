import React, { Component } from 'react'
import './style.css'
import dddddd from "./clothes.jpg"

class home extends Component {
    render() {
        return ( 
            <div className='clothes'>
                <h1 className ='title' > Title </h1>
                <div className='lorem'>
                    <div className='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut at elit lacus.Aliquam ut nulla eros.Etiam faucibus, arcu ut pharetra accumsan, lorem nunc eleifend augue, et lacinia ligula erat id augue.Sed justo neque, sodales eu nibh ut, tincidunt placerat urna.Etiam lacus risus, consequat ac ante vel, ultricies placerat ante.Morbi porta dui metus, vel vestibulum diam tincidunt eu.Cras sed maximus nulla, nec auctor libero.

                        Aenean tincidunt enim convallis ligula malesuada, id mollis leo pellentesque.Sed porttitor ac dolor non faucibus.Praesent venenatis odio eu lacus facilisis ornare.Quisque pretium tortor id justo faucibus dictum et ac libero.In consectetur leo nec enim bibendum feugiat.Fusce quis nisi condimentum turpis scelerisque suscipit vitae ut purus.Mauris convallis, odio eu feugiat consequat, lectus ipsum interdum massa, nec sodales eros risus eu diam.Maecenas eget dui sit amet nulla ultricies faucibus vitae vel neque.Vivamus eget nulla maximus, viverra nisi eget, mollis velit.Aenean rutrum odio scelerisque porttitor maximus.

                        Phasellus venenatis massa ac hendrerit faucibus.Mauris eu purus velit.Nulla facilisi.Proin cursus lorem dui.Suspendisse ac massa in nunc varius aliquam.Morbi ultricies fermentum tristique.Ut in lectus sit amet diam sagittis convallis.Suspendisse quis neque ut quam fringilla fringilla quis sit amet enim.Sed sollicitudin tellus ut egestas ultricies.Cras porta, nibh finibus condimentum tincidunt, leo ipsum imperdiet ligula, in lacinia felis purus et ipsum.Maecenas vel condimentum sapien. 
                    </div> 
                    <img className='image' src={dddddd}></img> 
                </div>
            </div>
        )
    }
}

export default home