<?php

namespace App\Http\Controllers;

use App\Models\ClientRecords;
use App\Models\Evaluation;
use App\Models\Office;
use App\Models\Unit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Illuminate\Support\Str;

class EvaluationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $code)
    {
        $evaluation = Evaluation::whereCode($code)->with("client_record")->first();
        // dd($evaluation);
        // if ($evaluation == null) {
        //     throw ValidationException::withMessages([
        //         'evaluated' => true,
        //     ]);
        // }
        // $questions = array(
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "",
        //         "question" => "Region of Residence",
        //         "choices" => array(
        //             "Bangsamoro Autonomous Region in Muslim Mindanao",
        //             "Bicol Region",
        //             "Cagayan Valley",
        //             "CALABARZON",
        //             "Caraga Region",
        //             "Central Luzon",
        //             "Central Visayas",
        //             "Cordillera Administrative Region",
        //             "Davao Region",
        //             "Ilocos Region",
        //             "MIMAROPA",
        //             "National Capital Region",
        //             "Northern Mindanao",
        //             "SOCCSKSARGEN",
        //             "Western Visayas",
        //             "Zamboanga Peninsula",
        //         ),
        //         "type" => "demog_question",
        //         "qtype" => "dropdown",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "",
        //         "question" => "Sex",
        //         "choices" => array(
        //             "Male",
        //             "Female",
        //             "Others"
        //         ),
        //         "type" => "demog_question",
        //         "qtype" => "dropdown",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Citizen Charter Questions(CC)",
        //         "question" => "Which of the following best describes your awareness of a CC?",
        //         "choices" => array(
        //             "I know what a CC is and I saw this office's CC.",
        //             "I know what a CC is but I did NOT see this office's CC.",
        //             "I learned of the CC is and I did not see one of this office.",
        //             "N/A"
        //         ),
        //         "type" => "cc_question",
        //         "qtype" => "radio",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Citizen Charter Questions(CC)",
        //         "question" => "If aware of CC (answered 1-3 in CC1). Would you say that the CC of this office was?",
        //         "choices" => array(
        //             "Easy to see",
        //             "Somewhat easy to see",
        //             "Difficult to see",
        //             "Not visible at all",
        //             "N/A"
        //         ),
        //         "type" => "cc_question",
        //         "qtype" => "radio",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Citizen Charter Questions(CC)",
        //         "question" => "If aware of CC (answered 1-3 in CC1). How much did the CC help you in your transaction?",
        //         "choices" => array(
        //             "Helped very much",
        //             "Somewhat helped",
        //             "Did not help",
        //             "N/A"
        //         ),
        //         "type" => "cc_question",
        //         "qtype" => "radio",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office has the willingness to help, assist, and provide prompt service to the client.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office provides effective service that you need.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office provides the convenience of location or accesibility of the service you require.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office gives effective ways of providing information.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office provides modest/affordable/justifiable cost, if any, of the service that you require.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office was able to deliver the service/s with integrety, honesty, and fairness.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office provides a level of competence and capability with satisfying service/s.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office has provided the service/s that you need.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "",
        //         "question" => "Do you have any other information/ comments/ suggestions/ recommendations? Type none if there aren'nt any.",
        //         "choices" => null,
        //         "type" => "suggestions",
        //         "qtype" => "open_ended",
        //     ),
        // );
        return Inertia::render('Evaluation', [
            // "questions" => $questions,
            "evaluation" => $evaluation
        ]);
    }

    public function results_index(Request $request)
    {

        $from = $request->from ?? date("Y-m-d");
        $to = $request->to ?? date("Y-m-d");

        if (Auth::user()->user_type == "root" || Auth::user()->user_type == "admin" || Auth::user()->user_type == "vcsas") {
            $office_id = $request->office_id ?? "";
        } else {
            $office_id = Auth::user()->office_id;
        }

        $offices = Office::whereNotIn("abbrevation", ["Admin", "VCSAS"])->get();
        $office_selected = Office::when($office_id !=  null || $office_id != "", function ($query) use ($office_id) {
            $query->whereId($office_id);
        })->first();
        $units = Unit::when($office_id !=  null || $office_id != "", function ($query) use ($office_id) {
            $query->whereOfficeId($office_id)->whereNotIn("abbrevation", ["Admin", "VCSAS"]);
        })->get();

        $evaluation = Evaluation::whereStatus("complete")->with("client_record")->when($from !=  null || $from != "" && $to != null || $to != "", function ($query) use ($from, $to) {
            $query->whereBetween('updated_at', [$from, Carbon::parse($to)->addDays(1)->format("Y-m-d")]);
        })->when($office_id !=  null || $office_id != "", function ($query5) use ($office_id) {
            $query5->whereHas("client_record", function ($query) use ($office_id) {
                $query->whereHas("unit_service", function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                })->with(['unit_service' => function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                }]);
            })->with(["client_record" => function ($query) use ($office_id) {
                $query->whereHas("unit_service", function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                })->with(['unit_service' => function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                }]);
            }]);
        })->orderBy("updated_at", "desc")->get();

        $questions_label = array(
            "The office has the willingness to help, assist, and provide prompt service to the client.",
            "The office provides effective service that you need.",
            "The office provides the convenience of location or accesibility of the service you require.",
            "The office gives effective ways of providing information.",
            "The office provides modest/affordable/justifiable cost, if any, of the service that you require.",
            "The office was able to deliver the service/s with integrety, honesty, and fairness.",
            "The office provides a level of competence and capability with satisfying service/s.",
            "The office has provided the service/s that you need.",
        );

        $mean = [];
        $standard_deviation = [];
        $standard_per_q = [];
        $adjectival_result = [];
        $suggestions = [];
        $sum_q = [];
        $mean_chart = [];
        $standard_deviation_chart = [];

        $result_per_question = [];
        foreach ($evaluation as $key => $data) {
            $suggestions[$key]["suggestion"] = $data->data["suggestions"];
            $suggestions[$key]["client_service"] = $data->data["client_service"];
            $suggestions[$key]["office"] = $data->client_record->unit_service->unit->office->name;
            $suggestions[$key]["date"] = $data->updated_at;
        }

        foreach ($evaluation->groupBy("client_record.unit_service.unit.office.name") as $office_name => $office) {
            $plucked_data = $office->pluck("data");
            $revalued_data = [];
            foreach ($plucked_data as $key => $set) {
                for ($i = 1; $i < 9; $i++) {
                    $revalued_data[$key][] = $set["e_" . $i];
                }
            }

            $revalued_data2 = [];
            foreach ($revalued_data as $respondent => $questions) {
                foreach ($questions as $choice => $answer) {
                    $revalued_data2[$choice][] = array_sum(array_filter($answer));
                }
            }
            foreach ($revalued_data2 as $key => $q) {
                $array_clean = array_filter($q);
                $temp_mean = array_sum($array_clean) / (int)count($array_clean);

                $sum_q[$office_name][$key] = $temp_mean;

            }

            $temp_data = [];
            $temp_data2 = [];
            foreach ($revalued_data as $respondent => $questions) {
                foreach ($questions as $choice => $answer) {
                    $array_clean_standard_diviation = array_filter($answer);
                    $temp_data2[$choice][] = $array_clean_standard_diviation == [] ? 1:0;
                    if ($array_clean_standard_diviation != []) {
                        $temp_data[$choice][] = pow((array_sum($array_clean_standard_diviation) - $sum_q[$office_name][$choice]), 2);
                    }
                }
            }
            $temp_standard = [];
            foreach ($temp_data as $key2 => $respondents) {
                $temp_standard[$key2] = (count($respondents) != 1) ? sqrt((array_sum($respondents) / (count($respondents) - 1))) : 0;
            }

            $standard_deviation[$office_name] = array_sum($temp_standard) / 8;
            $standard_per_q[$office_name] = $temp_standard;

        }
        foreach ($sum_q as $key => $office) {
            for ($i = 0; $i < count($office); $i++) {
                $result_per_question[$questions_label[$i]]["mean_label"][$key]["result"] = $office[$i];
                $result_per_question[$questions_label[$i]]["mean_label"][$key]["adjectival_result"] = (($office[$i]) <= 1.80) ? "Very Poor" : ((($office[$i]) >= 1.81 && ($office[$i]) <= 2.6) ? "Poor" : ((($office[$i]) >= 2.61) && (($office[$i]) <= 3.40) ? "Average" : ((($office[$i]) >= 3.41) && (($office[$i]) <= 4.20) ? "Above Average" : "Excellent")));
                $result_per_question[$questions_label[$i]]["mean_chart"][] = array(
                    "name" => $key,
                    "data" => array(
                        "Mean" => $office[$i]
                    )
                );
                $result_per_question[$questions_label[$i]]["standard_deviation_label"][$key] = $standard_per_q[$key][$i];
                $result_per_question[$questions_label[$i]]["standard_deviation_chart"][] = array(
                    "name" => $key,
                    "data" => array(
                        "Standard Deviation" => $standard_per_q[$key][$i]
                    )
                );
            }

            $mean_overall = array_sum($office) / count($office);
            $mean[$key] = $mean_overall;
            $adjectival_result[$key] = (($mean_overall) <= 1.80) ? "Very Poor" : ((($mean_overall) >= 1.81 && ($mean_overall) <= 2.6) ? "Poor" : ((($mean_overall) >= 2.61) && (($mean_overall) <= 3.40) ? "Average" : ((($mean_overall) >= 3.41) && (($mean_overall) <= 4.20) ? "Above Average" : "Excellent")));

            $mean_chart[] = array(
                "name" => $key,
                "data" => array(
                    $from . " - " . $to => $mean_overall
                )
            );
        }
        foreach ($standard_deviation as $office => $data) {
            $standard_deviation_chart[] = array(
                "name" => $office,
                "data" => array(
                    $from . " - " . $to => $data
                )
            );
        }
        return Inertia::render('EvaluationResult', [
            "result_per_question" => count($evaluation) == 1 ? [] : $result_per_question,
            "mean_chart" => count($evaluation) == 1 ? [] : $mean_chart,
            "standard_deviation_chart" => count($evaluation) == 1 ? [] : $standard_deviation_chart,
            "mean" => count($evaluation) == 1 ? [] : $mean,
            "standard_deviation" => count($evaluation) == 1 ? [] : $standard_deviation,
            "adjectival" => count($evaluation) == 1 ? [] : $adjectival_result,
            "suggestions" => count($evaluation) == 1 ? [] : $suggestions,
            "from" => $from,
            "offices" => $offices,
            "office" => $office_selected,
            "units" => $units,
            "to" => $to,
            "office_id" => $office_id,
        ]);
    }

    public function comparison(Request $request)
    {
        $from = $request->from ?? date("Y-m-d");
        $to = $request->to ?? date("Y-m-d");

        #first
        if (Auth::user()->user_type == "root" || Auth::user()->user_type == "admin" || Auth::user()->user_type == "vcsas") {
            $office_id = $request->office_id ?? "";
        } else {
            $office_id = Auth::user()->office_id;
        }

        $offices = Office::whereNotIn("abbrevation", ["Admin", "VCSAS"])->get();
        $office_selected = Office::when($office_id !=  null || $office_id != "", function ($query) use ($office_id) {
            $query->whereId($office_id);
        })->first();
        $units = Unit::when($office_id !=  null || $office_id != "", function ($query) use ($office_id) {
            $query->whereOfficeId($office_id)->whereNotIn("abbrevation", ["Admin", "VCSAS"]);
        })->get();

        $evaluation = Evaluation::whereStatus("complete")->with("client_record")->when($from !=  null || $from != "" && $to != null || $to != "", function ($query) use ($from, $to) {
            $query->whereBetween('updated_at', [$from, Carbon::parse($to)->addDays(1)->format("Y-m-d")]);
        })->when($office_id !=  null || $office_id != "", function ($query5) use ($office_id) {
            $query5->whereHas("client_record", function ($query) use ($office_id) {
                $query->whereHas("unit_service", function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                })->with(['unit_service' => function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                }]);
            })->with(["client_record" => function ($query) use ($office_id) {
                $query->whereHas("unit_service", function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                })->with(['unit_service' => function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                }]);
            }]);
        })->orderBy("updated_at", "desc")->get();

        $mean = [];
        $standard_deviation = [];
        $adjectival_result = [];
        $sum_q = [];
        $mean_chart = [];
        $standard_deviation_chart = [];

        foreach ($evaluation->groupBy("client_record.unit_service.unit.office.name") as $office_name => $office) {
            $plucked_data = $office->pluck("data");
            $revalued_data = [];
            foreach ($plucked_data as $key => $set) {
                for ($i = 1; $i < 9; $i++) {
                    $revalued_data[$key][] = $set["e_" . $i];
                }
            }

            $revalued_data2 = [];
            foreach ($revalued_data as $respondent => $questions) {
                foreach ($questions as $choice => $answer) {
                    $revalued_data2[$choice][] = array_sum(array_filter($answer));
                }
            }
            foreach ($revalued_data2 as $key => $q) {
                $array_clean = array_filter($q);
                $temp_mean = array_sum($array_clean) / (int)count($array_clean);

                $sum_q[$office_name][$key] = $temp_mean;

            }

            $temp_data = [];
            $temp_data2 = [];
            foreach ($revalued_data as $respondent => $questions) {
                foreach ($questions as $choice => $answer) {
                    $array_clean_standard_diviation = array_filter($answer);
                    $temp_data2[$choice][] = $array_clean_standard_diviation == [] ? 1:0;
                    if ($array_clean_standard_diviation != []) {
                        $temp_data[$choice][] = pow((array_sum($array_clean_standard_diviation) - $sum_q[$office_name][$choice]), 2);
                    }
                }
            }
            $temp_standard = [];
            foreach ($temp_data as $key2 => $respondents) {
                $temp_standard[$key2] = (count($respondents) != 1) ? sqrt((array_sum($respondents) / (count($respondents) - 1))) : 0;
            }

            $standard_deviation[$office_name] = array_sum($temp_standard) / 8;

        }
        foreach ($sum_q as $key => $office) {

            $mean_overall = array_sum($office) / count($office);
            $mean[$key] = $mean_overall;
            $adjectival_result[$key] = (($mean_overall) <= 1.80) ? "Very Poor" : ((($mean_overall) >= 1.81 && ($mean_overall) <= 2.6) ? "Poor" : ((($mean_overall) >= 2.61) && (($mean_overall) <= 3.40) ? "Average" : ((($mean_overall) >= 3.41) && (($mean_overall) <= 4.20) ? "Above Average" : "Excellent")));

            $mean_chart[] = array(
                "name" => $key,
                "data" => array(
                    $from . " - " . $to => $mean_overall
                )
            );
        }
        foreach ($standard_deviation as $office => $data) {
            $standard_deviation_chart[] = array(
                "name" => $office,
                "data" => array(
                    $from . " - " . $to => $data
                )
            );
        }

        #second

        $from2 = $request->from2 ?? date("Y-m-d");
        $to2 = $request->to2 ?? date("Y-m-d");

        #second
        $evaluation2 = Evaluation::whereStatus("complete")->with("client_record")->when($from2 !=  null || $from2 != "" && $to2 != null || $to2 != "", function ($query) use ($from2, $to2) {
            $query->whereBetween('updated_at', [$from2, Carbon::parse($to2)->addDays(1)->format("Y-m-d")]);
        })->when($office_id !=  null || $office_id != "", function ($query5) use ($office_id) {
            $query5->whereHas("client_record", function ($query) use ($office_id) {
                $query->whereHas("unit_service", function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                })->with(['unit_service' => function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                }]);
            })->with(["client_record" => function ($query) use ($office_id) {
                $query->whereHas("unit_service", function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                })->with(['unit_service' => function ($query2) use ($office_id) {
                    $query2->whereHas("unit", function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    })->with(['unit' => function ($query3) use ($office_id) {
                        $query3->whereHas("office", function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        })->with(['office' => function ($query4) use ($office_id) {
                            $query4->whereId($office_id);
                        }]);
                    }]);
                }]);
            }]);
        })->orderBy("updated_at", "desc")->get();

        $mean2 = [];
        $standard_deviation2 = [];
        $adjectival_result2 = [];
        $sum_q2 = [];
        $mean_chart2 = [];
        $standard_deviation_chart2 = [];

        foreach ($evaluation2->groupBy("client_record.unit_service.unit.office.name") as $office_name2 => $office2) {
            $plucked_data2 = $office2->pluck("data");
            $revalued_data = [];
            foreach ($plucked_data2 as $key => $set) {
                for ($i = 1; $i < 9; $i++) {
                    $revalued_data[$key][] = $set["e_" . $i];
                }
            }

            $revalued_data2 = [];
            foreach ($revalued_data as $respondent => $questions) {
                foreach ($questions as $choice => $answer) {
                    $revalued_data2[$choice][] = array_sum(array_filter($answer));
                }
            }
            foreach ($revalued_data2 as $key => $q) {
                $array_clean = array_filter($q);
                $temp_mean = array_sum($array_clean) / (int)count($array_clean);

                $sum_q2[$office_name2][$key] = $temp_mean;

            }

            $temp_data = [];
            $temp_data2 = [];
            foreach ($revalued_data as $respondent => $questions) {
                foreach ($questions as $choice => $answer) {
                    $array_clean_standard_diviation = array_filter($answer);
                    $temp_data2[$choice][] = $array_clean_standard_diviation == [] ? 1:0;
                    if ($array_clean_standard_diviation != []) {
                        $temp_data[$choice][] = pow((array_sum($array_clean_standard_diviation) - $sum_q2[$office_name2][$choice]), 2);
                    }
                }
            }
            $temp_standard = [];
            foreach ($temp_data as $key2 => $respondents) {
                $temp_standard[$key2] = (count($respondents) != 1) ? sqrt((array_sum($respondents) / (count($respondents) - 1))) : 0;
            }

            $standard_deviation2[$office_name2] = array_sum($temp_standard) / 8;

        }
        foreach ($sum_q2 as $key90 => $office2) {
            $mean_overall2 = array_sum($office2) / count($office2);
            $mean2[$key90] = $mean_overall2;
            $adjectival_result2[$key90] = (($mean_overall2) <= 1.80) ? "Very Poor" : ((($mean_overall2) >= 1.81 && ($mean_overall2) <= 2.6) ? "Poor" : ((($mean_overall2) >= 2.61) && (($mean_overall2) <= 3.40) ? "Average" : ((($mean_overall2) >= 3.41) && (($mean_overall2) <= 4.20) ? "Above Average" : "Excellent")));

            $mean_chart2[] = array(
                "name" => $key90,
                "data" => array(
                    $from2 . " - " . $to2 => $mean_overall2
                )
            );
        }
        foreach ($standard_deviation2 as $office3 => $data) {
            $standard_deviation_chart2[] = array(
                "name" => $office3,
                "data" => array(
                    $from2 . " - " . $to2 => $data
                )
            );
        }
        return Inertia::render('EvaluationComparison', [
            "mean_chart" => count($evaluation) == 1 ? [] : $mean_chart,
            "mean_chart2" => count($evaluation2) == 1 ? [] : $mean_chart2,
            "standard_deviation_chart" => count($evaluation) == 1 ? [] : $standard_deviation_chart,
            "standard_deviation_chart2" => count($evaluation2) == 1 ? [] : $standard_deviation_chart2,
            "mean" => count($evaluation) == 1 ? [] : $mean,
            "mean2" => count($evaluation2) == 1 ? [] : $mean2,
            "standard_deviation" => count($evaluation) == 1 ? [] : $standard_deviation,
            "standard_deviation2" => count($evaluation2) == 1 ? [] : $standard_deviation2,
            "adjectival" => count($evaluation) == 1 ? [] : $adjectival_result,
            "adjectival2" => count($evaluation2) == 1 ? [] : $adjectival_result2,
            "from" => $from,
            "from2" => $from2,
            "offices" => $offices,
            "office" => $office_selected,
            "units" => $units,
            "to" => $to,
            "to2" => $to2,
            "office_id" => $office_id,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Evaluation $evaluation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Evaluation $evaluation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Evaluation $evaluation)
    {
        $evaluation->update([
            "data" => $request->all(),
            "status" => "complete"
        ]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Evaluation $evaluation)
    {
        //
    }
}
