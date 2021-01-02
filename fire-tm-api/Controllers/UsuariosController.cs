using System.Collections.Generic;
using fire_tm_api.Models;
using fire_tm_api.Contexts;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace fire_tm_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase {

        private readonly ApplicationDBContext context;

        public UsuariosController(ApplicationDBContext context){
            this.context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Usuario>> Get(){
            return Ok(context.usuarios.ToList());
        }

        [HttpGet]
        [Route("prueba")]
        public ActionResult<string> prueba(){
            return Ok("Sirve");
        }
    }
}