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
        $units = Unit::when($office_id !=  null || $office_id != "", function ($query) use ($office_id) {
            $query->whereOfficeId($office_id);
        })->get();
        $filtered_records = ClientRecords::with("client")->has("client")->with("unit_service")->when($office_id !=  null || $office_id != "", function ($query) use ($office_id) {
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
        })->when($from !=  null || $from != "" && $to != null || $to != "", function ($query) use ($from, $to) {
            $query->whereBetween('created_at', [$from, Carbon::parse($to)->addDays(1)->format("Y-m-d")]);
        })->get();
        $data = [];

        if ($office_id == "") {
            $office_sample = collect($offices)->map(function ($office) use ($filtered_records, $data) {
                foreach ($filtered_records as $key => $record) {
                    if ($office->id == $record->unit_service->unit->office->id) {
                        $data[Carbon::parse($record->created_at)->format("Y-m-d")][$key] = $record;
                    }
                }
                $office = (object)array(
                    "chart" => array(
                        "name" => $office->abbrevation,
                        "data" => $data
                    )
                );
                return $office;
            })->toArray();
            foreach ($filtered_records->groupBy("unit_service.unit.office.name") as $key => $office) {
                $iteration = 0;
                foreach ($office->groupBy("role") as $key2 => $role) {
                    $office_count[$key]["type"][$iteration]["name"] = $key2;
                    foreach ($role->groupBy("type") as $key3 => $type) {
                        $office_count[$key]["type"][$iteration]["data"][$key3] = $type->count();
                    }
                    $iteration++;
                }
                $office_count[$key]["sex"]["male"] = 0;
                $office_count[$key]["sex"]["female"] = 0;
                foreach ($office->groupBy("client.sex") as $key4 => $sex) {
                    $office_count[$key]["sex"][$key4] = $sex->count();
                }

                $office_count[$key]["overall_count"] = $office->count();

                foreach ($office->groupBy("type") as $key2 => $type) {
                    $office_count[$key]["type_text"][$key2] = $type->count();
                }
            }
        } else {
            $office_sample = collect($units)->map(function ($unit) use ($filtered_records, $data) {
                foreach ($filtered_records as $key => $record) {
                    if ($unit->id == $record->unit_service->unit->id) {
                        $data[Carbon::parse($record->created_at)->format("Y-m-d")][$key] = $record;
                    }
                }
                $office = (object)array(
                    "chart" => array(
                        "name" => $unit->abbrevation,
                        "data" => $data
                    )
                );
                return $office;
            })->toArray();

            foreach ($filtered_records->groupBy("unit_service.unit.name") as $key => $office) {
                $iteration = 0;
                foreach ($office->groupBy("role") as $key2 => $role) {
                    $office_count[$key]["type"][$iteration]["name"] = $key2;
                    foreach ($role->groupBy("type") as $key3 => $type) {
                        $office_count[$key]["type"][$iteration]["data"][$key3] = $type->count();
                    }
                    $iteration++;
                }

                $office_count[$key]["sex"]["male"] = 0;
                $office_count[$key]["sex"]["female"] = 0;
                foreach ($office->groupBy("client.sex") as $key4 => $sex) {
                    $office_count[$key]["sex"][$key4] = $sex->count();
                }

                $office_count[$key]["overall_count"] = $office->count();

                foreach ($office->groupBy("type") as $key2 => $type) {
                    $office_count[$key]["type_text"][$key2] = $type->count();
                }
            }
        }

        $overall_count = collect($office_sample)->map(function ($office) {
            $office = (object)array(
                "name" => $office->chart["name"],
                "data" => (object)$this->collect_data($office->chart["data"]),
            );
            return $office;
        })->toArray();

        $evaluation = Evaluation::whereStatus("complete")->with("client_record")->when($from !=  null || $from != "" && $to != null || $to != "", function ($query) use ($from, $to) {
            $query->whereBetween('created_at', [$from, Carbon::parse($to)->addDays(1)->format("Y-m-d")]);
        })->get();


        $offices_mean = [];
        $sum_q = [];
        foreach ($evaluation->groupBy("client_record.unit_service.unit.office.name") as $prime => $office) {
            $plucked_data = $office->pluck("data");
            foreach ($plucked_data as $key => $set) {
                for ($i = 1; $i < 9; $i++) {
                    $revalued__data[$key][] = $set["e_" . $i];
                }
            }

            foreach ($revalued__data as $key => $set) {
                foreach ($set as $key2 => $answers) {
                    foreach ($answers as $key3 => $answer) {
                        $revalued_data2[$key2][] = $answer;
                    }
                }
            }

            foreach ($revalued_data2 as $key => $q) {
                $sum_q[$prime][] = array_sum($q) / $office->count();
            }
        }
        foreach ($sum_q as $key => $office) {
            $offices_mean[$prime] = array_sum($office)/count($office);
         }

        

        return Inertia::render('EvaluationResult', [
            "evaluation_result" => $evaluation,
            "offices_mean" => $offices_mean,
            "client_chart" => $overall_count,
            "office_count_role_gender" => $office_count ?? [],
            "from" => $from,
            "offices" => $offices,
            "to" => $to,
            "office_id" => $office_id,
        ]);
    }

    public function generateCode()
    {
        do {
            $code = Str::random(10);
            $exists = Evaluation::where('code', $code)->exists();
        } while ($exists);

        return $code;
    }

    public function collect_data($datas)
    {
        $temp_data = [];
        foreach ($datas as $key => $data) {
            $temp_data[$key] = count($data);
        }
        return $temp_data;
    }

    public function count_male_female($datas)
    {
        $temp_data = [];
        foreach ($datas as $key => $data) {
            $temp_data[$key] = count(collect($data)->pluck("client")->pluck("sex"));
            // foreach ($data as $key2 => $client) {
            //     $temp_data[$key][$key2] = $client;
            // }
        }
        return $temp_data;
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
