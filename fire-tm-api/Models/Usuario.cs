using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fire_tm_api.Models{
    public class Usuario{
        [Key]
        public int id {get;set;}
        public string nombre {get;set;}
        public string correo {get;set;}
        public string clave {get;set;}
        [Column("usuarioverificado")]
        public bool usuarioVerificado {get;set;}
    }
}

