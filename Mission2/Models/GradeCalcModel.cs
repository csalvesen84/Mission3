using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission2.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100)]
        public int? assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int? project { get; set; }
        [Required]
        [Range(0, 100)]
        public int? quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int? exams { get; set; }
        [Required]
        [Range(0, 100)]
        public int? intex { get; set; }
    }
}
