using System.Runtime.Serialization;

namespace obj2022_tp2_web_api.Enums
{
    public enum ControlState
    {
        [EnumMember(Value = "automatique")]
        Automatique,
        [EnumMember(Value = "manuel")]
        Manuel,
        [EnumMember(Value = "fermer_porte")]
        FermerPorte,
        [EnumMember(Value = "ouvrir_porte")]
        OuvrirPorte,
    }
}
